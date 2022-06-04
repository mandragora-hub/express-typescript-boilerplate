import express from 'express'
import { workoutController, recordController } from 'src/controllers'
import apicache from 'apicache'

const cache = apicache.middleware

const router = express.Router()

router.get('/', workoutController.getAllWorkouts)

router.get('/:workoutId', cache('2 minutes'), workoutController.getOneWorkout)

router.get('/:workoutId/record', recordController.getRecordForWorkout)

router.post('/', workoutController.createNewWorkout)

router.patch('/:workoutId', workoutController.updateOneWorkout)

router.delete('/:workoutId', workoutController.deleteOneWorkout)

export default router
