import { Response, Request, NextFunction } from 'express'
import { workoutService } from 'src/services'
import Workout from 'src/database/models/Workout'

const getAllWorkouts = async (req: Request, res: Response) => {
  const allWorkouts = await workoutService.getAllWorkouts()
  res.send({ status: 'OK', data: allWorkouts })
}

const getOneWorkout = async (req: Request<{ workoutId: number }>, res: Response, next: NextFunction) => {
  const workoutId = req.params.workoutId
  try {
    const workout = await workoutService.getOneWorkout(workoutId)
    res.send({ status: 'OK', data: workout })
  } catch (error) {
    next(error)
  }
}

const createNewWorkout = async (req: Request<{ workoutId: number }, {}, Workout, {}>, res: Response, next: NextFunction) => {
  const { body } = req
  // TODO put some validation
  // if (!body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips) {
  //   return next(
  //     Error(
  //       "One of the following keys is missing or is empty in request body: 'name', 'mode', 'equipment', 'exercises', 'trainerTips'"
  //     )
  //   )
  // }
  const newWorkout = body
  try {
    const createdWorkout = await workoutService.createNewWorkout(newWorkout)
    res.status(201).send({ status: 'OK', data: createdWorkout })
  } catch (error) {
    next(error)
  }
}

const updateOneWorkout = (req: Request<{ workoutId: number }, {}, Workout, {}>, res: Response) => {
  const workoutId = req.params.workoutId
  const updatedWorkout = workoutService.updateOneWorkout(workoutId, req.body)
  res.status(201).send({ status: 'OK', data: updatedWorkout })
}

const deleteOneWorkout = (req: Request<{ workoutId: number }>, res: Response) => {
  const workoutId = req.params.workoutId
  workoutService.deleteOneWorkout(workoutId)
  res.send({ status: 'OK' })
}

export default {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
}
