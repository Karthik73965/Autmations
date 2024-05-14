import express from 'express'
import { DiscordController } from '../controllers/discord.controller.js'
const router = express.Router()

router.post('/discord', DiscordController)

export default router