import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { z } from 'zod';
import { loadManagedSecrets } from './secretManager.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../../.env'), override: !process.env.VERCEL });
await loadManagedSecrets();

const envBoolean = z.preprocess((value) => {
  if (typeof value === 'boolean') return value;
  if (typeof value !== 'string') return value;
  return ['true', '1', 'yes', 'on'].includes(value.trim().toLowerCase());
}, z.boolean());

const schema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().default(5000),
  PUBLIC_BASE_URL: z.string().url().default('http://localhost:5173'),
  API_BASE_URL: z.string().url().default('http://localhost:5000'),
  APPROVED_ORIGINS: z.string().default('http://localhost:5173'),
  APPROVED_HOSTS: z.string().default('localhost,127.0.0.1'),
  BLOCK_DIRECT_IP: envBoolean.default(false),
  TRUST_PROXY: z.string().default('loopback'),
  FORCE_HTTPS: envBoolean.default(false),
  MONGODB_URI: z.string().optional().default(''),
  REDIS_URL: z.string().optional().default(''),
  SESSION_SECRET: z.string().min(24).default('hbg_fallback_session_secret_set_real_env_in_vercel'),
  JWT_ACCESS_SECRET: z.string().min(24).default('hbg_fallback_access_secret_set_real_env_in_vercel'),
  JWT_REFRESH_SECRET: z.string().min(24).default('hbg_fallback_refresh_secret_set_real_env_in_vercel'),
  JWT_ACCESS_TTL: z.string().default('15m'),
  JWT_REFRESH_TTL_DAYS: z.coerce.number().default(30),
  COOKIE_DOMAIN: z.string().optional(),
  RECAPTCHA_SECRET: z.string().optional(),
  HCAPTCHA_SECRET: z.string().optional(),
  CAPTCHA_PROVIDER: z.enum(['none', 'recaptcha', 'hcaptcha']).default('none'),
  API_KEYS: z.string().default(''),
  FIELD_ENCRYPTION_KEY_BASE64: z.string().optional(),
  LOG_LEVEL: z.string().default('info')
});

const env = schema.parse(process.env);
const list = (value) => value.split(',').map((item) => item.trim()).filter(Boolean);

export const config = {
  env: env.NODE_ENV,
  isProduction: env.NODE_ENV === 'production',
  port: env.PORT,
  publicBaseUrl: env.PUBLIC_BASE_URL,
  apiBaseUrl: env.API_BASE_URL,
  approvedOrigins: list(env.APPROVED_ORIGINS),
  approvedHosts: list(env.APPROVED_HOSTS),
  blockDirectIp: env.BLOCK_DIRECT_IP,
  trustProxy: env.TRUST_PROXY,
  forceHttps: env.FORCE_HTTPS,
  mongo: { uri: env.MONGODB_URI || undefined },
  redisUrl: env.REDIS_URL || undefined,
  session: { secret: env.SESSION_SECRET },
  jwt: {
    accessSecret: env.JWT_ACCESS_SECRET,
    refreshSecret: env.JWT_REFRESH_SECRET,
    accessTtl: env.JWT_ACCESS_TTL,
    refreshTtlDays: env.JWT_REFRESH_TTL_DAYS
  },
  cookies: {
    domain: env.COOKIE_DOMAIN,
    secure: env.NODE_ENV === 'production',
    sameSite: env.NODE_ENV === 'production' ? 'strict' : 'lax'
  },
  captcha: {
    provider: env.CAPTCHA_PROVIDER,
    recaptchaSecret: env.RECAPTCHA_SECRET,
    hcaptchaSecret: env.HCAPTCHA_SECRET
  },
  apiKeys: env.API_KEYS.split(',').filter(Boolean).map((entry) => {
    const [key, notBefore, expiresAt] = entry.split(':');
    return { key, notBefore: new Date(notBefore), expiresAt: new Date(expiresAt) };
  }),
  fieldEncryptionKey: env.FIELD_ENCRYPTION_KEY_BASE64,
  logLevel: env.LOG_LEVEL
};






