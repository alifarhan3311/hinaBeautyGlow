import { logger } from '../utils/logger.js';

const blockedAgents = [/curl/iu, /python-requests/iu, /sqlmap/iu, /nikto/iu, /masscan/iu];

export const botDetection = (req, res, next) => {
  const userAgent = req.get('user-agent') || '';
  const headerScore = ['accept', 'accept-language', 'user-agent'].filter((header) => req.get(header)).length;
  const suspicious = blockedAgents.some((pattern) => pattern.test(userAgent)) || headerScore < 2;
  if (suspicious && !req.path.startsWith('/api/v1/health')) {
    logger.warn('security.bot.suspected', { ip: req.ip, path: req.path, userAgent });
    res.setHeader('X-Bot-Score', 'high');
  }
  next();
};
