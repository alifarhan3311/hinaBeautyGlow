import crypto from 'node:crypto';
import { UAParser } from 'ua-parser-js';

export const fingerprintDevice = (req, res, next) => {
  const parser = new UAParser(req.get('user-agent') || '');
  const ua = parser.getResult();
  const raw = [req.ip, ua.browser.name, ua.os.name, ua.device.type, req.get('accept-language')].join('|');
  req.device = ua;
  req.deviceFingerprint = crypto.createHash('sha256').update(raw).digest('hex');
  next();
};
