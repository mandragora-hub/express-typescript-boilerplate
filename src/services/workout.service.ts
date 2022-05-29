import Workout from 'src/database/models/Workout'
import sequelize from 'src/database'
import Equipment from 'src/database/models/Equipment'
import Exercise from 'src/database/models/Exercise'
import Record from 'src/database/models/Record'
import TrainerTip from 'src/database/models/TrainerTip'

const getAllWorkouts = async () => {
  const allWorkouts = await sequelize.models.Workout.findAll()
  return allWorkouts
}

const getOneWorkout = async (workoutId: number) => {
  const workout = await sequelize.models.Workout.findByPk(workoutId)
  return workout
}

const createNewWorkout = async (newWorkout: Workout) => {
  const workout = await sequelize.models.Workout.create(
    { ...newWorkout },
    {
      include: [Equipment, Exercise, TrainerTip, Record],
    }
  )
  return workout
}

const updateOneWorkout = async (workoutId: number, changes: Workout) => {
  const updatedWorkout = await sequelize.models.Workout.update(changes, {
    where: {
      id: workoutId,
    },
  })
  return updatedWorkout
}

const deleteOneWorkout = async (workoutId: number) => {
  await sequelize.models.Workout.destroy({
    where: {
      id: workoutId,
    },
  })
}

export default {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
}
