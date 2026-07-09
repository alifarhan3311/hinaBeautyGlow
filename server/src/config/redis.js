import Redis from 'ioredis';
import { config } from './index.js';
import { logger } from '../utils/logger.js';

let redis;

const isLocalRedisUrl = (url) => /^(redis|rediss):\/\/(localhost|127\.0\.0\.1|::1)(:|\/|$)/i.test(url || '');

export const getRedis = () => {
  if (!config.redisUrl) return null;

  if (process.env.VERCEL && process.env.ENABLE_REDIS !== 'true') {
    return null;
  }

  if (process.env.VERCEL && isLocalRedisUrl(config.redisUrl)) {
    logger.warn('redis.disabled_on_vercel_local_url');
    return null;
  }

  if (!redis) {
    redis = new Redis(config.redisUrl, {
      lazyConnect: true,
      enableOfflineQueue: false,
      maxRetriesPerRequest: 1,
      connectTimeout: 1200,
    });
    redis.on('error', (error) => logger.warn('redis.error', { message: error.message }));
  }
  return redis;
};

export const closeRedis = async () => {
  if (redis && redis.status !== 'end') await redis.quit();
};

