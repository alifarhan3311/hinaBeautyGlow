import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(12).max(128),
  captchaToken: z.string().optional()
});

export const refreshSchema = z.object({
  refreshToken: z.string().min(32)
});
