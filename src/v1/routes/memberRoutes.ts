import express from 'express'
import memberController from 'src/controllers/memberController'

const router = express.Router();

router.get("/", memberController.getAllMembers);

export default router
