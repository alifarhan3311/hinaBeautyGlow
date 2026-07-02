# Hina Beauty Glow

Enterprise MERN salon platform scaffold with a luxury React frontend and a security-first Express API.

## Quick Start

```bash
npm install
cp server/.env.example server/.env
npm run dev
```

Run MongoDB and Redis locally or with Docker:

```bash
docker compose up mongo redis
```

## Security Highlights

- CSP nonce, Trusted Types, Helmet, HSTS, secure cookies.
- JWT access tokens plus refresh token rotation.
- Redis session store and Redis rate limiter.
- Device fingerprinting, GeoIP logging, bot detection, injection detection.
- reCAPTCHA v3 and hCaptcha support.
- AWS Secrets Manager support, API key rotation, GDPR endpoints.
- CI with npm audit, Snyk, CodeQL, SonarQube readiness, and OWASP ZAP compose file.

## Deployment

- `server/Dockerfile` uses a non-root runtime user.
- `client/Dockerfile` produces immutable static assets.
- `nginx/default.conf` is reverse-proxy ready.
- `ecosystem.config.cjs` supports PM2 cluster deployments.

See `docs/SECURITY.md` and `docs/DISASTER_RECOVERY.md` before production launch.
