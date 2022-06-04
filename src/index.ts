import 'dotenv/config'

import express, { Express, Request, Response } from 'express'
import ErrorHandler from './commons/errorHandler'
import v1RouterWorkout from './v1/routes/workoutRoutes'
import v1RouterRecord from './v1/routes/recordRoutes'
import v1RouterMember from './v1/routes/memberRoutes'

import helmet from 'helmet'
import hpp from 'hpp'
import morgan from 'morgan'
import compression from 'compression'

import sequelize from 'src/database'

;(async () => {
  await sequelize.sync({ alter: true })
})()

const app: Express = express()

app.use(compression()); // Best practices
app.use(morgan('common')); // HTTP request logger middleware for node.js

// parses the body for POST, PUT, DELETE, etc.
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

/* Set Security Configs */
app.use(helmet());
app.use(hpp());

app.get('/', (_req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

app.use('/api/v1/workout', v1RouterWorkout)
app.use('/api/v1/record', v1RouterRecord)
app.use('/api/v1/Member', v1RouterMember)

app.use(ErrorHandler.logError)
app.use(ErrorHandler.sendError)

const port = process.env.HTTP_PORT
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
