import net from 'node:net';
import { config } from '../config/index.js';
import { AppError } from '../utils/AppError.js';

const isApprovedHost = (host) => {
  if (!host) return true;
  if (config.approvedHosts.includes(host)) return true;
  if (process.env.VERCEL && host.endsWith('.vercel.app')) return true;
  return false;
};

export const domainGuard = (req, res, next) => {
  const host = (req.hostname || '').toLowerCase();
  const origin = req.get('origin');
  const forwardedProto = req.get('x-forwarded-proto');
  const isHttps = req.secure || forwardedProto === 'https';
  const isIpHost = net.isIP(host) !== 0;

  if (config.forceHttps && !isHttps) return next(new AppError('HTTPS is required.', 403, 'HTTPS_REQUIRED'));
  if (config.blockDirectIp && isIpHost) return next(new AppError('Host is not allowed.', 403, 'HOST_BLOCKED'));
  if (!isApprovedHost(host)) return next(new AppError('Host is not allowed.', 403, 'HOST_BLOCKED'));
  if (origin && !config.approvedOrigins.includes(origin) && !(process.env.VERCEL && new URL(origin).hostname.endsWith('.vercel.app'))) {
    return next(new AppError('Origin is not allowed.', 403, 'ORIGIN_BLOCKED'));
  }
  return next();
};
