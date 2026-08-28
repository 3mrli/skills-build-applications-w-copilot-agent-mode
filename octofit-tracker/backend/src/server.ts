import express from 'express'
import mongoose from 'mongoose'
import { resources, type ResourceName } from './models.js'

const app = express()
const port = Number(process.env.PORT ?? 8000)
const mongoUri = process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/octofit_db'

app.use(express.json())

const codespaceName = process.env.CODESPACE_NAME
const apiUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : `http://localhost:${port}`

app.get('/api', (_request, response) => {
  response.json({ service: 'octofit-tracker-backend', apiUrl, routes: Object.keys(resources).map((resource) => `/api/${resource}/`) })
})

for (const resource of Object.keys(resources) as ResourceName[]) {
  const model = resources[resource]
  app.get(`/api/${resource}/`, async (_request, response, next) => {
    try {
      response.json(await model.find().lean())
    } catch (error) {
      next(error)
    }
  })

  app.post(`/api/${resource}/`, async (request, response, next) => {
    try {
      const document = await model.create(request.body)
      response.status(201).json(document)
    } catch (error) {
      next(error)
    }
  })
}

app.get('/api/health', (_request, response) => {
  response.json({
    service: 'octofit-tracker-backend',
    status: 'ok',
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
  })
})

mongoose
  .connect(mongoUri)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error: unknown) => {
    console.error('MongoDB connection unavailable; API will remain available:', error)
  })

app.listen(port, () => {
  console.log(`OctoFit Tracker API listening on port ${port}`)
})
