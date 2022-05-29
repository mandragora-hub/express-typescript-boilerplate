import sequelize from 'src/database'

const getAllRecords = async() => {
  const records = await sequelize.models.Record.findAll();
  return records;
};

const getRecordForWorkout = async (workoutId: number) => {
  const records = await sequelize.models.Record.findAll({
    where: {
      workoutId
    }
  });
  return records;
};

export default { getAllRecords, getRecordForWorkout };
