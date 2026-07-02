import fs from 'node:fs';
import path from 'node:path';
import winston from 'winston';
import { config } from '../config/index.js';

const logDir = path.resolve('logs');
fs.mkdirSync(logDir, { recursive: true });

export const logger = winston.createLogger({
  level: config.logLevel,
  format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: path.join(logDir, 'app.log'), maxsize: 10_485_760, maxFiles: 10 }),
    new winston.transports.File({ filename: path.join(logDir, 'security.log'), level: 'warn', maxsize: 10_485_760, maxFiles: 20 })
  ]
});

export const requestLoggerStream = {
  write: (message) => logger.info('http.request', { message: message.trim() })
};
