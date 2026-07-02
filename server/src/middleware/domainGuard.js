import net from 'node:net';
import { config } from '../config/index.js';
import { AppError } from '../utils/AppError.js';

export const domainGuard = (req, res, next) => {
  const host = (req.hostname || '').toLowerCase();
  const origin = req.get('origin');
  const isIpHost = net.isIP(host) !== 0;

  if (config.forceHttps && !req.secure) return next(new AppError('HTTPS is required.', 403, 'HTTPS_REQUIRED'));
  if (config.blockDirectIp && isIpHost) return next(new AppError('Host is not allowed.', 403, 'HOST_BLOCKED'));
  if (host && !config.approvedHosts.includes(host)) return next(new AppError('Host is not allowed.', 403, 'HOST_BLOCKED'));
  if (origin && !config.approvedOrigins.includes(origin)) return next(new AppError('Origin is not allowed.', 403, 'ORIGIN_BLOCKED'));
  return next();
};
