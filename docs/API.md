# API

Base path: `/api/v1`

## Health

- `GET /health`
- `GET /ready`

## Auth

- `POST /auth/login`
- `POST /auth/refresh`
- `POST /auth/logout`

Refresh tokens rotate on every refresh. Reuse of an old refresh token revokes the token family.

## Appointments

- `POST /appointments`
- `GET /admin/appointments`

Admin routes require authentication and a valid rotated API key when `API_KEYS` is configured.

## Privacy

- `GET /privacy/export`
- `POST /privacy/erasure`
