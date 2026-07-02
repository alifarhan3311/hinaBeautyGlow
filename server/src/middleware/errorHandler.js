import { logger } from '../utils/logger.js';
import { config } from '../config/index.js';

export const notFoundHandler = (req, res) => {
  res.status(404).json({ error: 'Resource not found.' });
};

export const errorHandler = (error, req, res, next) => {
  const status = error.statusCode || 500;
  logger.error('http.error', {
    status,
    code: error.code,
    message: error.message,
    path: req.path,
    ip: req.ip,
    stack: config.isProduction ? undefined : error.stack
  });
  res.status(status).json({
    error: status >= 500 ? 'Something went wrong.' : error.message,
    code: error.code || 'ERROR'
  });
};
