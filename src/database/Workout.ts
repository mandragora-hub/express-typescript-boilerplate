import DB from './db.json'

const getAllWorkouts = () => {
  return DB.workouts
}

export default { getAllWorkouts }
