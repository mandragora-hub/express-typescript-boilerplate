import { Workout as WorkoutType } from "src/commons/types"
import Workout from '../database/Workout'

import { v4 as uuid } from 'uuid'

const getAllWorkouts = () => {
  const allWorkouts = Workout.getAllWorkouts()
  return allWorkouts
}

const getOneWorkout = (workoutId: string) => {
  const workout = Workout.getOneWorkout(workoutId)
  return workout
}

const createNewWorkout = (newWorkout: WorkoutType) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
    updatedAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
  }
  const createdWorkout = Workout.createNewWorkout(workoutToInsert)
  return createdWorkout
}

const updateOneWorkout = (workoutId: string, changes: WorkoutType) => {
  const updatedWorkout = Workout.updateOneWorkout(workoutId, changes)
  return updatedWorkout
}

const deleteOneWorkout = (workoutId: string) => {
    Workout.deleteOneWorkout(workoutId)
}

export default {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
}
