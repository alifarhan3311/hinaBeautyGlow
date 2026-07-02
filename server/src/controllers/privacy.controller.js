import { User } from '../models/User.js';
import { AuditLog } from '../models/AuditLog.js';

export const exportMyData = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.sub).lean();
    await AuditLog.create({ actor: req.user.sub, action: 'privacy.export', ip: req.ip, geo: req.geo, deviceFingerprint: req.deviceFingerprint });
    res.json({ user });
  } catch (error) {
    next(error);
  }
};

export const requestErasure = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.sub, { 'privacy.erasureRequestedAt': new Date() });
    await AuditLog.create({ actor: req.user.sub, action: 'privacy.erasure_requested', ip: req.ip, geo: req.geo, deviceFingerprint: req.deviceFingerprint });
    res.json({ ok: true });
  } catch (error) {
    next(error);
  }
};
