import { Router } from 'express';
import { health, readiness } from '../controllers/health.controller.js';
import { validate } from '../middleware/validate.js';
import { requireAuth } from '../middleware/auth.js';
import { loginSchema, refreshSchema } from '../validators/auth.validator.js';
import { appointmentSchema } from '../validators/appointment.validator.js';

export const routes = Router();

const lazy = (loader, exportName) => async (req, res, next) => {
  try {
    const mod = await loader();
    return mod[exportName](req, res, next);
  } catch (error) {
    return next(error);
  }
};

const authController = () => import('../controllers/auth.controller.js');
const appointmentController = () => import('../controllers/appointment.controller.js');
const privacyController = () => import('../controllers/privacy.controller.js');

routes.get('/health', health);
routes.get('/ready', readiness);
routes.post('/auth/login', validate(loginSchema), lazy(authController, 'login'));
routes.post('/auth/refresh', validate(refreshSchema), lazy(authController, 'refresh'));
routes.post('/auth/logout', lazy(authController, 'logout'));
routes.post('/appointments', validate(appointmentSchema), lazy(appointmentController, 'createAppointment'));
routes.get('/admin/appointments', requireAuth(['admin', 'manager', 'receptionist']), lazy(appointmentController, 'listAppointments'));
routes.get('/privacy/export', requireAuth(), lazy(privacyController, 'exportMyData'));
routes.post('/privacy/erasure', requireAuth(), lazy(privacyController, 'requestErasure'));
