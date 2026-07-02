import { AuthService } from '../services/auth.service.js';
import { verifyCaptcha } from '../services/captcha.service.js';
import { config } from '../config/index.js';

const cookieOptions = {
  httpOnly: true,
  secure: config.cookies.secure,
  sameSite: config.cookies.sameSite,
  path: '/'
};

export const login = async (req, res, next) => {
  try {
    if (!(await verifyCaptcha(req.body.captchaToken, req.ip))) return res.status(400).json({ error: 'Verification failed.' });
    const tokens = await AuthService.login({ ...req.body, fingerprint: req.deviceFingerprint, ip: req.ip });
    res.cookie('accessToken', tokens.accessToken, { ...cookieOptions, maxAge: 15 * 60 * 1000 });
    res.cookie('refreshToken', tokens.refreshToken, { ...cookieOptions, maxAge: config.jwt.refreshTtlDays * 86400000 });
    res.json({ ok: true });
  } catch (error) {
    next(error);
  }
};

export const refresh = async (req, res, next) => {
  try {
    const refreshToken = req.body.refreshToken || req.cookies.refreshToken;
    const tokens = await AuthService.rotateRefreshToken({ refreshToken, fingerprint: req.deviceFingerprint, ip: req.ip });
    res.cookie('accessToken', tokens.accessToken, { ...cookieOptions, maxAge: 15 * 60 * 1000 });
    res.cookie('refreshToken', tokens.refreshToken, { ...cookieOptions, maxAge: config.jwt.refreshTtlDays * 86400000 });
    res.json({ ok: true });
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res) => {
  res.clearCookie('accessToken');
  res.clearCookie('refreshToken');
  res.json({ ok: true });
};
