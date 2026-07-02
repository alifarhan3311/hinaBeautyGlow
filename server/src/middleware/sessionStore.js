import session from 'express-session';
import { RedisStore } from 'connect-redis';
import { config } from '../config/index.js';
import { getRedis } from '../config/redis.js';

const redis = getRedis();

export const sessionMiddleware = session({
  name: '__Host-hbg.sid',
  store: redis ? new RedisStore({ client: redis }) : undefined,
  secret: config.session.secret,
  resave: false,
  saveUninitialized: false,
  rolling: true,
  cookie: {
    httpOnly: true,
    secure: config.cookies.secure,
    sameSite: config.cookies.sameSite,
    maxAge: 1000 * 60 * 60
  }
});
