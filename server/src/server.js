import http from 'node:http';
import mongoose from 'mongoose';
import { createApp } from './app.js';
import { config } from './config/index.js';
import { logger } from './utils/logger.js';
import { closeRedis } from './config/redis.js';
import { scheduleLogRotation } from './utils/logRotation.js';

const start = async () => {
  await mongoose.connect(config.mongo.uri);
  const app = await createApp();
  const server = http.createServer(app);

  scheduleLogRotation();

  server.listen(config.port, () => {
    logger.info('server.started', { port: config.port, env: config.env });
  });

  const shutdown = async (signal) => {
    logger.info('server.shutdown.started', { signal });
    server.close(async () => {
      await mongoose.connection.close(false);
      await closeRedis();
      logger.info('server.shutdown.complete');
      process.exit(0);
    });
    setTimeout(() => process.exit(1), 10000).unref();
  };

  process.on('SIGTERM', shutdown);
  process.on('SIGINT', shutdown);
  process.on('uncaughtException', (error) => {
    logger.error('process.uncaught_exception', { message: error.message, stack: error.stack });
    shutdown('uncaughtException');
  });
  process.on('unhandledRejection', (reason) => {
    logger.error('process.unhandled_rejection', { reason });
  });
};

start().catch((error) => {
  logger.error('server.start.failed', { message: error.message, stack: error.stack });
  process.exit(1);
});

export default start;