module.exports = async (req, res) => {
  const { default: handler } = await import('../server/src/serverless.js');
  return handler(req, res);
};
