import express from 'express'
import { NodemailerController } from '../controllers/nodemailer.controller.js';

const router = express.Router()

router.post('/email', NodemailerController)

export default router ;
