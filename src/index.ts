import 'dotenv/config'

import express, { Express, Request, Response } from 'express'
import ErrorHandler from './commons/errorHandler'
import v1RouterWorkout from './v1/routes/workoutRoutes'
import v1RouterRecord from './v1/routes/recordRoutes'
import v1RouterMember from './v1/routes/memberRoutes'

import sequelize from 'src/database'

;(async () => {
  await sequelize.sync({ alter: true })
})()

const app: Express = express()
const port = process.env.PORT

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

app.use('/api/v1/workout', v1RouterWorkout)
app.use('/api/v1/record', v1RouterRecord)
app.use('/api/v1/Member', v1RouterMember)

app.use(ErrorHandler.logError)
app.use(ErrorHandler.sendError)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})
