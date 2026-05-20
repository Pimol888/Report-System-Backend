import 'dotenv/config'

// loads and validates environment variables
export function getEnv() {
  const port = Number(process.env.PORT ?? 3000)
  const nodeEnv = process.env.NODE_ENV ?? 'development'
  const corsOrigin = process.env.CORS_ORIGIN ?? 'http://localhost:5173'

  return {
    port: Number.isFinite(port) ? port : 3000,
    nodeEnv,
    corsOrigin,
    isProduction: nodeEnv === 'production',
  }
}
