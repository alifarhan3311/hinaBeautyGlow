import fs from 'node:fs/promises';
import path from 'node:path';
import { logger } from './logger.js';

export const scheduleLogRotation = () => {
  const rotate = async () => {
    const logs = await fs.readdir('logs').catch(() => []);
    const cutoff = Date.now() - 1000 * 60 * 60 * 24 * 30;
    await Promise.all(logs.map(async (file) => {
      const fullPath = path.join('logs', file);
      const stat = await fs.stat(fullPath);
      if (stat.mtimeMs < cutoff && file.endsWith('.log')) await fs.rm(fullPath);
    }));
    logger.info('logs.rotation.complete');
  };

  setInterval(rotate, 1000 * 60 * 60 * 24).unref();
};
