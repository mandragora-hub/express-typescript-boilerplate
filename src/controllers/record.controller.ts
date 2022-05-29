import { Response, Request } from 'express'
import { recordService } from 'src/services'

const getAllRecords = async (req: Request, res: Response) => {
  const allRecords = await recordService.getAllRecords()
  res.send({ status: 'OK', data: allRecords })
}

const getRecordForWorkout = async (req: Request<{ workoutId: number }>, res: Response) => {
  const workoutId = req.params.workoutId
  const recordForWorkout = await recordService.getRecordForWorkout(workoutId)
  res.send({ status: 'OK', data: recordForWorkout })
}

export default {
  getAllRecords,
  getRecordForWorkout
}
