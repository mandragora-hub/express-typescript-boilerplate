import express from 'express'
import recordController from 'src/controllers/recordController'


const router = express.Router();

router.get("/", recordController.getAllRecords);


export default router
