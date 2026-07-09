import express from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import mongoSanitize from 'express-mongo-sanitize';
import hpp from 'hpp';
import morgan from 'morgan';
import { config } from './config/index.js';
import { securityHeaders } from './middleware/securityHeaders.js';
import { domainGuard } from './middleware/domainGuard.js';
import { sessionMiddleware } from './middleware/sessionStore.js';
import { redisRateLimiter } from './middleware/rateLimiter.js';
import { injectionDetector } from './middleware/injectionDetector.js';
import { fingerprintDevice } from './middleware/fingerprint.js';
import { geoIpLogger } from './middleware/geoIpLogger.js';
import { botDetection } from './middleware/botDetection.js';
import { apiKeyGuard } from './middleware/apiKeyGuard.js';
import { requestLoggerStream } from './utils/logger.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';
import { routes } from './routes/index.js';

export const createApp = async () => {
  const app = express();
  app.disable('x-powered-by');
  app.set('trust proxy', config.trustProxy);

  app.use(domainGuard);
  app.use(securityHeaders);
  app.use(compression());
  app.use(cookieParser(config.session.secret));
  app.use(express.json({ limit: '250kb' }));
  app.use(express.urlencoded({ extended: false, limit: '250kb' }));
  app.use(mongoSanitize({ replaceWith: '_' }));
  app.use(hpp());
  app.use(sessionMiddleware);
  app.use(morgan('combined', { stream: requestLoggerStream }));
  app.use(fingerprintDevice);
  app.use(geoIpLogger);
  app.use(botDetection);
  app.use(injectionDetector);
  app.use(redisRateLimiter);

  app.get(['/', '/api'], (req, res) => {
    res.json({
      status: 'ok',
      service: 'Hina Beauty Glow API',
      health: '/api/v1/health',
      ready: '/api/v1/ready'
    });
  });
  app.use('/api/v1/admin', apiKeyGuard);
  app.use('/api/v1', routes);
  app.use(notFoundHandler);
  app.use(errorHandler);
  return app;
};
let appPromise;

export const getApp = () => {
  if (!appPromise) appPromise = createApp();
  return appPromise;
};

export default async function handler(req, res) {
  const app = await getApp();
  return app(req, res);
}
