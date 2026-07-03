import mongoose from 'mongoose';
import { createApp } from './app.js';
import { config } from './config/index.js';
import { logger } from './utils/logger.js';

let appPromise;
let mongoPromise;

const connectMongo = () => {
  if (!mongoPromise) {
    mongoPromise = mongoose.connect(config.mongo.uri).catch((error) => {
      mongoPromise = null;
      logger.error('serverless.mongo.failed', { message: error.message });
      throw error;
    });
  }
  return mongoPromise;
};

export const getServerlessApp = async () => {
  await connectMongo();
  if (!appPromise) appPromise = createApp();
  return appPromise;
};

export default async function handler(req, res) {
  const app = await getServerlessApp();
  return app(req, res);
}
