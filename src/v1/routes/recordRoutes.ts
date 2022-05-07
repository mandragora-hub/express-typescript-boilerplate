import express from 'express'
import { recordController } from 'src/controllers'

const router = express.Router()

router.get('/', recordController.getAllRecords)

export default router
