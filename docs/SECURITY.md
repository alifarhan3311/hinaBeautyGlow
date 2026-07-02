# Security Operations

## Implemented Controls

- CSP nonce and Trusted Types headers.
- Secure JWT access tokens with refresh token rotation and token family reuse detection.
- Redis-backed sessions and Redis-backed rate limiting with memory fallback.
- Device fingerprinting, GeoIP login logging, bot signals, and suspicious injection detection.
- reCAPTCHA v3 and hCaptcha verification adapters.
- GeoIP logging reads trusted proxy headers such as Cloudflare `CF-IPCountry`; use a managed edge/location provider instead of embedding stale local IP databases.
- API key rotation using effective and expiry dates.
- AWS Secrets Manager support and encrypted-field configuration hook.
- Health and readiness endpoints.
- Graceful shutdown, automatic log retention, and security logs suitable for Fail2Ban.
- GDPR-ready export and erasure request endpoints.

## Fail2Ban

Monitor `logs/security.log` for:

- `security.rate_limit.exceeded`
- `security.injection.detected`
- `security.bot.suspected`
- repeated `Invalid credentials.`

## WAF and Cloudflare

- Enable Cloudflare proxying, WAF managed OWASP rules, bot fight mode, and rate limits on `/api/v1/auth/*`.
- Allow only Cloudflare IP ranges at the origin firewall.
- Set `TRUST_PROXY` to the production proxy setting and `FORCE_HTTPS=true`.

## Environment Encryption

Prefer a managed secret store. If encrypted environment files are required, encrypt `.env.production` with SOPS, age, or KMS and decrypt only inside CI/CD or the runtime secret injection layer.

## npm Audit

Run `npm audit --omit=dev` in CI. Use `npm audit fix` only after reviewing lockfile changes and running the full test suite.
