import { config } from '../config/index.js';

const verifyEndpoint = {
  recaptcha: 'https://www.google.com/recaptcha/api/siteverify',
  hcaptcha: 'https://hcaptcha.com/siteverify'
};

export const verifyCaptcha = async (token, ip) => {
  if (config.captcha.provider === 'none') return true;
  const secret = config.captcha.provider === 'recaptcha' ? config.captcha.recaptchaSecret : config.captcha.hcaptchaSecret;
  if (!secret || !token) return false;
  const body = new URLSearchParams({ secret, response: token, remoteip: ip });
  const response = await fetch(verifyEndpoint[config.captcha.provider], { method: 'POST', body });
  const result = await response.json();
  if (config.captcha.provider === 'recaptcha') return result.success && (result.score ?? 0) >= 0.5;
  return Boolean(result.success);
};
