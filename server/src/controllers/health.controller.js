import mongoose from 'mongoose';
import { getRedis } from '../config/redis.js';

const withTimeout = (promise, ms, fallback) => Promise.race([
  promise,
  new Promise((resolve) => setTimeout(() => resolve(fallback), ms))
]);

export const health = async (req, res) => {
  const redis = getRedis();
  const checks = {
    api: 'ok',
    mongo: mongoose.connection.readyState === 1 ? 'ok' : 'down',
    redis: redis && redis.status === 'ready' ? await withTimeout(redis.ping().then(() => 'ok').catch(() => 'down'), 500, 'timeout') : 'not_ready'
  };
  const healthy = checks.mongo === 'ok' && checks.api === 'ok';
  res.status(healthy ? 200 : 503).json({ status: healthy ? 'ok' : 'degraded', checks, uptime: process.uptime() });
};

export const readiness = (req, res) => res.json({ status: 'ready' });
