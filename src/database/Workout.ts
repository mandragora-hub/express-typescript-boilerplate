const DB = require('./db.json')
// const { saveToDatabase } = require('./utils')

const getAllWorkouts = () => {
  try {
    return DB.workouts
  } catch (error) {
    throw new Error(String(error))
  }
}

const getOneWorkout = (workoutId: any) => {
  const workout = DB.workouts.find((workout: { id: any }) => workout.id === workoutId)
  if (!workout) {
    throw new Error(`Can't find workout with the id '${workoutId}'`)
  }
  return workout
}

const createNewWorkout = (newWorkout: any) => {
  const isAlreadyAdded = DB.workouts.findIndex((workout: { name: any }) => workout.name === newWorkout.name) > -1
  if (isAlreadyAdded) {
    throw new Error(`Workout with the name '${newWorkout.name}' already exists`)
  }
  DB.workouts.push(newWorkout)
  // saveToDatabase(DB)
  return newWorkout
}

const updateOneWorkout = (workoutId: any, changes: { name: any }) => {
  const isAlreadyAdded = DB.workouts.findIndex((workout: { name: any }) => workout.name === changes.name) > -1
  if (isAlreadyAdded) {
    throw new Error(`Workout with the name '${changes.name}' already exists`)
  }
  const indexForUpdate = DB.workouts.findIndex((workout: { id: any }) => workout.id === workoutId)
  if (indexForUpdate === -1) {
    throw new Error(`Can't find workout with the id '${workoutId}'`)
  }
  const updatedWorkout = {
    ...DB.workouts[indexForUpdate],
    ...changes,
    updatedAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
  }
  DB.workouts[indexForUpdate] = updatedWorkout
  // saveToDatabase(DB)
  return updatedWorkout
}

const deleteOneWorkout = (workoutId: any) => {
  const indexForDeletion = DB.workouts.findIndex((workout: { id: any }) => workout.id === workoutId)
  if (indexForDeletion === -1) {
    throw new Error(`Can't find workout with the id '${workoutId}`)
  }
  DB.workouts.splice(indexForDeletion, 1)
  // saveToDatabase(DB)
}

module.exports = {
  getAllWorkouts,
  createNewWorkout,
  getOneWorkout,
  updateOneWorkout,
  deleteOneWorkout,
}
