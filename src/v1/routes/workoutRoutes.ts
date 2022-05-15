import express from 'express'
import workoutController from 'src/controllers/workoutController'
import recordController from 'src/controllers/recordController'
import apicache from 'apicache'

const cache = apicache.middleware;

const router = express.Router();

router.get("/", cache('2 minutes'), workoutController.getAllWorkouts);

router.get("/:workoutId", workoutController.getOneWorkout);

router.get("/:workoutId/record", recordController.getRecordForWorkout);

router.post("/", workoutController.createNewWorkout);

router.patch("/:workoutId", workoutController.updateOneWorkout);

router.delete("/:workoutId", workoutController.deleteOneWorkout);


export default router
