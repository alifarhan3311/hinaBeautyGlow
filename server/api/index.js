export default function handler(req, res) {
  res.status(200).json({
    status: 'ok',
    service: 'Hina Beauty Glow API',
    health: '/api/v1/health',
    ready: '/api/v1/ready'
  });
}
