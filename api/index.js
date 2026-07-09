module.exports = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify({
    status: 'ok',
    service: 'Hina Beauty Glow API',
    health: '/api/v1/health',
    ready: '/api/v1/ready'
  }));
};
