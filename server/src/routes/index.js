import { Router } from 'express';
import { login, logout, refresh } from '../controllers/auth.controller.js';
import { createAppointment, listAppointments } from '../controllers/appointment.controller.js';
import { health, readiness } from '../controllers/health.controller.js';
import { exportMyData, requestErasure } from '../controllers/privacy.controller.js';
import { validate } from '../middleware/validate.js';
import { requireAuth } from '../middleware/auth.js';
import { loginSchema, refreshSchema } from '../validators/auth.validator.js';
import { appointmentSchema } from '../validators/appointment.validator.js';

export const routes = Router();

routes.get('/health', health);
routes.get('/ready', readiness);
routes.post('/auth/login', validate(loginSchema), login);
routes.post('/auth/refresh', validate(refreshSchema), refresh);
routes.post('/auth/logout', logout);
routes.post('/appointments', validate(appointmentSchema), createAppointment);
routes.get('/admin/appointments', requireAuth(['admin', 'manager', 'receptionist']), listAppointments);
routes.get('/privacy/export', requireAuth(), exportMyData);
routes.post('/privacy/erasure', requireAuth(), requestErasure);
