import Redis from 'ioredis';
import { config } from './index.js';
import { logger } from '../utils/logger.js';

let redis;

export const getRedis = () => {
  if (!config.redisUrl) return null;
  if (!redis) {
    redis = new Redis(config.redisUrl, { lazyConnect: true, maxRetriesPerRequest: 2 });
    redis.on('error', (error) => logger.warn('redis.error', { message: error.message }));
  }
  return redis;
};

export const closeRedis = async () => {
  if (redis) await redis.quit();
};
