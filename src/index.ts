import express, { Express, Request, Response } from 'express'
import ErrorHandler from './commons/errorHandler'
import v1RouterWorkout from './v1/routes/workoutRoutes'
import v1RouterRecord from './v1/routes/recordRoutes'

import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

app.use('/api/v1/workout', v1RouterWorkout)
app.use('/api/v1/record', v1RouterRecord)

app.use(ErrorHandler.logError)
app.use(ErrorHandler.sendError)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})
