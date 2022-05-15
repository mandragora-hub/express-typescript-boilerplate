import { Record } from 'src/commons/types'
import DB from './db.json'

const getAllRecords = () => {
  try {
    return DB.records
  } catch (error) {
    throw new Error(String(error))
  }
}

const getRecordForWorkout = (workoutId: string) => {
  const record = DB.records.filter((record: Record) => record.workout === workoutId)
  if (!record) {
    throw new Error(`Can't find workout with the id '${workoutId}'`)
  }
  return record
}
export default { getAllRecords, getRecordForWorkout }
