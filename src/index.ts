import express, { Express, Request, Response } from 'express'
import v1Router from './v1/routes/workoutRoutes'

import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

app.get('/api/v1', v1Router)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})
