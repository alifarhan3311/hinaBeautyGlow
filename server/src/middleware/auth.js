import jwt from 'jsonwebtoken';
import { config } from '../config/index.js';
import { RefreshToken } from '../models/RefreshToken.js';

export const requireAuth = (roles = []) => async (req, res, next) => {
  try {
    const token = req.cookies.accessToken || req.get('authorization')?.replace(/^Bearer\s+/i, '');
    if (!token) return res.status(401).json({ error: 'Authentication required.' });
    const payload = jwt.verify(token, config.jwt.accessSecret);
    if (roles.length && !roles.includes(payload.role)) return res.status(403).json({ error: 'Forbidden.' });
    req.user = payload;
    next();
  } catch {
    res.status(401).json({ error: 'Authentication required.' });
  }
};

export const revokeRefreshFamily = async (familyId) => {
  await RefreshToken.updateMany({ familyId }, { revokedAt: new Date(), revokedReason: 'reuse_detected' });
};
