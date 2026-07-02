# Disaster Recovery

## Objectives

- Recovery time objective: 4 hours for API and booking flows.
- Recovery point objective: 15 minutes when MongoDB point-in-time backup is enabled.
- Critical data: users, appointments, refresh tokens, audit logs, settings, contacts, newsletter subscribers.

## Backup Strategy

- MongoDB: enable managed daily snapshots plus point-in-time restore. For self-hosted deployments, run `mongodump --archive --gzip` every 6 hours to encrypted object storage.
- Redis: use append-only files for session/rate-limit continuity. Redis data is disposable except active sessions.
- Uploads: store outside the public web root and sync to encrypted object storage with versioning.
- Secrets: store in AWS Secrets Manager or an equivalent managed vault. Never back up plaintext `.env` files.
- Logs: ship application, access, and security logs to immutable storage with 90-day retention.

## Restore Procedure

1. Provision a clean environment from immutable Docker images.
2. Restore secrets from the secret manager.
3. Restore MongoDB to the target timestamp.
4. Restore uploads from encrypted object storage.
5. Start Redis fresh or restore AOF if active sessions must survive.
6. Run `/api/v1/health` and `/api/v1/ready`.
7. Validate booking creation and admin login.

## Failover

- Keep DNS behind Cloudflare with health checks.
- Use WAF managed rules for OWASP, bot score, and rate limiting.
- Block direct origin access by setting `APPROVED_HOSTS`, `BLOCK_DIRECT_IP=true`, and firewalling non-Cloudflare IP ranges.
