const { v4: uuid } = require('uuid')
const Workout = require('../database/Workout')

const getAllWorkouts = () => {
  const allWorkouts = Workout.getAllWorkouts()
  return allWorkouts
}

const getOneWorkout = (workoutId: any) => {
  const workout = Workout.getOneWorkout(workoutId)
  return workout
}

const createNewWorkout = (newWorkout: any) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
    updatedAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
  }
  const createdWorkout = Workout.createNewWorkout(workoutToInsert)
  return createdWorkout
}

const updateOneWorkout = (workoutId: number, changes: any) => {
  const updatedWorkout = Workout.updateOneWorkout(workoutId, changes)
  return updatedWorkout
}

const deleteOneWorkout = (workoutId: number) => {
    Workout.deleteOneWorkout(workoutId)
}

export default {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
}
