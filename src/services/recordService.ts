import Record from "src/database/Record";

const getAllRecords = () => {
  const records = Record.getAllRecords();
  return records;
};

const getRecordForWorkout = (workoutId: string) => {
  const records = Record.getRecordForWorkout(workoutId);
  return records;
};

export default { getAllRecords, getRecordForWorkout };
