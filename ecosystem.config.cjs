module.exports = {
  apps: [{
    name: 'hina-beauty-glow-api',
    script: 'server/src/server.js',
    instances: 'max',
    exec_mode: 'cluster',
    max_memory_restart: '512M',
    env: { NODE_ENV: 'production' }
  }]
};
