import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true, index: true },
  phone: { type: String, trim: true },
  passwordHash: { type: String, select: false },
  role: { type: String, enum: ['admin', 'manager', 'receptionist', 'customer'], default: 'customer', index: true },
  permissions: [{ type: String }],
  isActive: { type: Boolean, default: true },
  lockedUntil: Date,
  emailVerifiedAt: Date,
  privacy: {
    marketingConsent: { type: Boolean, default: false },
    dataExportRequestedAt: Date,
    erasureRequestedAt: Date
  }
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);
