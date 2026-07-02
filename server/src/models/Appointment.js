import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true },
  email: { type: String, trim: true, lowercase: true },
  treatment: { type: String, required: true, trim: true },
  preferredDate: { type: Date, required: true, index: true },
  preferredTime: { type: String, required: true },
  notes: { type: String, trim: true, maxlength: 1000 },
  status: { type: String, enum: ['pending', 'approved', 'rejected', 'rescheduled', 'cancelled'], default: 'pending', index: true },
  audit: {
    ip: String,
    geo: mongoose.Schema.Types.Mixed,
    deviceFingerprint: String
  }
}, { timestamps: true });

export const Appointment = mongoose.model('Appointment', appointmentSchema);
