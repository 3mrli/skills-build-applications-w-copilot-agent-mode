import express from 'express'
import mongoose from 'mongoose'

const app = express()
const port = Number(process.env.PORT ?? 8000)
const mongoUri = process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/octofit_db'

app.use(express.json())

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
    console.error('MongoDB connection unavailable:', error)
  })

app.listen(port, () => {
  console.log(`OctoFit Tracker API listening on port ${port}`)
})
