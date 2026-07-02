import crypto from 'node:crypto';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { nanoid } from 'nanoid';
import { config } from '../config/index.js';
import { User } from '../models/User.js';
import { RefreshToken } from '../models/RefreshToken.js';
import { revokeRefreshFamily } from '../middleware/auth.js';

const hashToken = (token) => crypto.createHash('sha256').update(token).digest('hex');
const daysFromNow = (days) => new Date(Date.now() + days * 24 * 60 * 60 * 1000);

export class AuthService {
  static async login({ email, password, fingerprint, ip }) {
    const user = await User.findOne({ email: email.toLowerCase(), isActive: true }).select('+passwordHash');
    if (!user || !(await bcrypt.compare(password, user.passwordHash))) throw new Error('Invalid credentials.');
    const familyId = nanoid(32);
    return this.issueTokens({ user, familyId, fingerprint, ip });
  }

  static async rotateRefreshToken({ refreshToken, fingerprint, ip }) {
    const tokenHash = hashToken(refreshToken);
    const record = await RefreshToken.findOne({ tokenHash });
    if (!record || record.revokedAt || record.expiresAt < new Date()) {
      if (record?.familyId) await revokeRefreshFamily(record.familyId);
      throw new Error('Invalid refresh token.');
    }
    record.revokedAt = new Date();
    record.revokedReason = 'rotated';
    await record.save();
    const user = await User.findById(record.user);
    return this.issueTokens({ user, familyId: record.familyId, fingerprint, ip });
  }

  static async issueTokens({ user, familyId, fingerprint, ip }) {
    const accessToken = jwt.sign({ sub: user.id, role: user.role, permissions: user.permissions }, config.jwt.accessSecret, { expiresIn: config.jwt.accessTtl });
    const refreshToken = nanoid(64);
    await RefreshToken.create({
      user: user.id,
      tokenHash: hashToken(refreshToken),
      familyId,
      deviceFingerprint: fingerprint,
      ip,
      expiresAt: daysFromNow(config.jwt.refreshTtlDays)
    });
    return { accessToken, refreshToken };
  }
}
