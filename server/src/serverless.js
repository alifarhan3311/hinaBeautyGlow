import mongoose from 'mongoose';
import { createApp } from './app.js';
import { config } from './config/index.js';
import { logger } from './utils/logger.js';

let appPromise;
let mongoPromise;

const connectMongo = () => {
  if (!config.mongo.uri) return Promise.resolve(null);
  if (!mongoPromise) {
    mongoPromise = mongoose.connect(config.mongo.uri, { serverSelectionTimeoutMS: 2500 }).catch((error) => {
      mongoPromise = null;
      logger.error('serverless.mongo.failed', { message: error.message });
      return null;
    });
  }
  return mongoPromise;
};

export const getServerlessApp = async () => {
  if (!appPromise) appPromise = createApp();
  connectMongo();
  return appPromise;
};

export default async function handler(req, res) {
  const app = await getServerlessApp();
  return app(req, res);
}
