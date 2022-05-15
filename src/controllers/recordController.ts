import { Response, Request } from 'express'
import recordService from 'src/services/recordService'

const getAllRecords = (req: Request, res: Response) => {
  const allRecords = recordService.getAllRecords()
  res.send({ status: 'OK', data: allRecords })
}

const getRecordForWorkout = (req: Request, res: Response) => {
  const workoutId = req.params.workoutId
  const recordForWorkout = recordService.getRecordForWorkout(workoutId)
  res.send({ status: 'OK', data: recordForWorkout })
}

export default {
  getAllRecords,
  getRecordForWorkout
}
