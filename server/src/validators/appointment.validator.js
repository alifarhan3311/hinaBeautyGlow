import { z } from 'zod';

export const appointmentSchema = z.object({
  name: z.string().min(2).max(80),
  phone: z.string().min(7).max(30),
  email: z.string().email().optional().or(z.literal('')),
  treatment: z.string().min(2).max(120),
  preferredDate: z.coerce.date(),
  preferredTime: z.string().min(3).max(20),
  notes: z.string().max(1000).optional()
});
