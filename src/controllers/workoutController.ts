import { Response, Request } from 'express'
import workoutService from 'src/services/workoutService'

const getAllWorkouts = (req: Request, res: Response) => {
  const allWorkouts = workoutService.getAllWorkouts()
  res.send({ status: "OK", data: allWorkouts });
}

const getOneWorkout = (req: Request, res: Response) => {
//   const workout = workoutService.getOneWorkout()
  res.send('Get an existing workout')
}

const createNewWorkout = (req: Request, res: Response) => {
//   const createdWorkout = workoutService.createNewWorkout()
  res.send('Create a new workout')
}

const updateOneWorkout = (req: Request, res: Response) => {
//   const updatedWorkout = workoutService.updateOneWorkout()
  res.send('Update an existing workout')
}

const deleteOneWorkout = (req: Request, res: Response) => {
  workoutService.deleteOneWorkout()
  res.send('Delete an existing workout')
}

export default {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
}
