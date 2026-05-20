import cors from 'cors'
import express from 'express'
import { getEnv } from './config/env.js'
import { apiRouter } from './routes/index.js'

// creates and configures the Express application
export function createApp() {
  const { corsOrigin } = getEnv()
  const app = express()

  app.use(
    cors({
      origin: corsOrigin,
      credentials: true,
    }),
  )
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.get('/', (_req, res) => {
    res.json({
      name: 'Report Management System API',
      version: '0.1.0',
      docs: '/api/health',
    })
  })

  app.use('/api', apiRouter)

  app.use((_req, res) => {
    res.status(404).json({ error: 'Not found' })
  })

  return app
}
