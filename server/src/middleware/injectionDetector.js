import { logger } from '../utils/logger.js';

const patterns = [
  /\$where|\$ne|\$gt|\$regex|\$expr/iu,
  /(\bunion\b.*\bselect\b)|(\bdrop\b\s+\btable\b)|(--|;--|\/\*)/iu,
  /<script|javascript:|onerror=|onload=/iu
];

const scan = (value) => {
  if (typeof value === 'string') return patterns.some((pattern) => pattern.test(value));
  if (Array.isArray(value)) return value.some(scan);
  if (value && typeof value === 'object') return Object.values(value).some(scan);
  return false;
};

export const injectionDetector = (req, res, next) => {
  if (scan(req.body) || scan(req.query) || scan(req.params)) {
    logger.warn('security.injection.detected', { ip: req.ip, path: req.path, fingerprint: req.deviceFingerprint });
    return res.status(400).json({ error: 'Invalid request.' });
  }
  return next();
};
