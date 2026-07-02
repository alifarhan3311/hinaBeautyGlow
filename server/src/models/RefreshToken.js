import mongoose from 'mongoose';

const refreshTokenSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  tokenHash: { type: String, required: true, unique: true },
  familyId: { type: String, required: true, index: true },
  deviceFingerprint: { type: String, required: true },
  ip: String,
  expiresAt: { type: Date, required: true, index: { expires: 0 } },
  revokedAt: Date,
  revokedReason: String
}, { timestamps: true });

export const RefreshToken = mongoose.model('RefreshToken', refreshTokenSchema);
