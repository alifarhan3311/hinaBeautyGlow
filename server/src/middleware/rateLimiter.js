import rateLimit from 'express-rate-limit';
import { getRedis } from '../config/redis.js';
import { logger } from '../utils/logger.js';

const memoryLimiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 120,
  standardHeaders: 'draft-7',
  legacyHeaders: false
});

export const redisRateLimiter = async (req, res, next) => {
  const redis = getRedis();
  if (!redis || redis.status !== 'ready') return memoryLimiter(req, res, next);

  const key = `rl:${req.ip}:${req.path}`;
  const count = await redis.incr(key);
  if (count === 1) await redis.expire(key, 60);
  res.setHeader('RateLimit-Limit', '120');
  res.setHeader('RateLimit-Remaining', String(Math.max(0, 120 - count)));
  if (count > 120) {
    logger.warn('security.rate_limit.exceeded', { ip: req.ip, path: req.path });
    return res.status(429).json({ error: 'Too many requests.' });
  }
  return next();
};
