export const loadManagedSecrets = async () => {
  if (!process.env.AWS_SECRET_ID) return;
  const { SecretsManagerClient, GetSecretValueCommand } = await import('@aws-sdk/client-secrets-manager');
  const client = new SecretsManagerClient({ region: process.env.AWS_REGION || 'us-east-1' });
  const result = await client.send(new GetSecretValueCommand({ SecretId: process.env.AWS_SECRET_ID }));
  const secrets = JSON.parse(result.SecretString || '{}');
  for (const [key, value] of Object.entries(secrets)) {
    if (!process.env[key]) process.env[key] = String(value);
  }
};
