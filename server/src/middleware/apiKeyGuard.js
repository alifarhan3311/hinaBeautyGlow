import crypto from 'node:crypto';
import { config } from '../config/index.js';

const equal = (a, b) => {
  const left = Buffer.from(a || '');
  const right = Buffer.from(b || '');
  return left.length === right.length && crypto.timingSafeEqual(left, right);
};

export const apiKeyGuard = (req, res, next) => {
  if (!config.apiKeys.length) return next();
  const provided = req.get('x-api-key');
  const now = new Date();
  const valid = config.apiKeys.some(({ key, notBefore, expiresAt }) => equal(provided, key) && now >= notBefore && now <= expiresAt);
  if (!valid) return res.status(401).json({ error: 'Invalid API key.' });
  return next();
};
