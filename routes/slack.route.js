import express from 'express'
import { SlackController } from '../controllers/slack.webhook.js'

const router = express.Router()

router.post('/slack', SlackController)

export default router 