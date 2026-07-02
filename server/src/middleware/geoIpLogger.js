import { logger } from '../utils/logger.js';

export const geoIpLogger = (req, res, next) => {
  req.geo = {
    country: req.get('cf-ipcountry') || req.get('x-vercel-ip-country') || 'unknown',
    region: req.get('x-vercel-ip-country-region') || 'unknown',
    city: req.get('x-vercel-ip-city') || 'unknown',
    source: req.get('cf-ipcountry') ? 'cloudflare' : 'proxy_headers'
  };
  if (req.path.includes('/auth/login')) {
    logger.info('security.geoip.login_attempt', { ip: req.ip, geo: req.geo, fingerprint: req.deviceFingerprint });
  }
  next();
};
