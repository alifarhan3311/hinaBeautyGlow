import { Appointment } from '../models/Appointment.js';
import { AuditLog } from '../models/AuditLog.js';

export const createAppointment = async (req, res, next) => {
  try {
    const appointment = await Appointment.create({
      ...req.body,
      audit: { ip: req.ip, geo: req.geo, deviceFingerprint: req.deviceFingerprint }
    });
    await AuditLog.create({
      action: 'appointment.created',
      resource: String(appointment._id),
      ip: req.ip,
      geo: req.geo,
      deviceFingerprint: req.deviceFingerprint
    });
    res.status(201).json({ appointment });
  } catch (error) {
    next(error);
  }
};

export const listAppointments = async (req, res, next) => {
  try {
    const appointments = await Appointment.find().sort({ preferredDate: 1 }).limit(100);
    res.json({ appointments });
  } catch (error) {
    next(error);
  }
};
