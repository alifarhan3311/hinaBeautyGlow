import mongoose from 'mongoose';

const auditLogSchema = new mongoose.Schema({
  actor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  action: { type: String, required: true, index: true },
  resource: String,
  metadata: mongoose.Schema.Types.Mixed,
  ip: String,
  geo: mongoose.Schema.Types.Mixed,
  deviceFingerprint: String
}, { timestamps: true });

export const AuditLog = mongoose.model('AuditLog', auditLogSchema);
