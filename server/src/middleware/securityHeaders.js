import helmet from 'helmet';
import { nanoid } from 'nanoid';
import { config } from '../config/index.js';

export const securityHeaders = [
  (req, res, next) => {
    res.locals.cspNonce = nanoid(32);
    res.setHeader('X-CSP-Nonce', res.locals.cspNonce);
    res.setHeader('Require-Trusted-Types-For', "'script'");
    res.setHeader('Trusted-Types', "default hinaPolicy dompurify 'allow-duplicates'");
    next();
  },
  helmet({
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        "default-src": ["'self'"],
        "base-uri": ["'self'"],
        "script-src": ["'self'", (req, res) => `'nonce-${res.locals.cspNonce}'`, 'https://www.google.com/recaptcha/', 'https://hcaptcha.com', 'https://*.hcaptcha.com'],
        "style-src": ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
        "font-src": ["'self'", 'https://fonts.gstatic.com'],
        "img-src": ["'self'", 'data:', 'blob:', 'https:'],
        "connect-src": ["'self'", ...config.approvedOrigins],
        "frame-src": ['https://www.google.com/recaptcha/', 'https://hcaptcha.com', 'https://*.hcaptcha.com'],
        "object-src": ["'none'"],
        "upgrade-insecure-requests": config.isProduction ? [] : null
      }
    },
    crossOriginEmbedderPolicy: false,
    hsts: config.isProduction ? { maxAge: 31536000, includeSubDomains: true, preload: true } : false,
    referrerPolicy: { policy: 'strict-origin-when-cross-origin' }
  })
];
