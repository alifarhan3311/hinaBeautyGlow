import { createServer } from 'node:http';
import { createApp } from '../src/app.js';

let server;

const getServer = async () => {
  if (!server) {
    const app = await createApp();
    server = createServer(app);
  }
  return server;
};

export default async function handler(req, res) {
  const s = await getServer();
  s.emit('request', req, res);
}