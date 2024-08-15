import * as controllers from '../controllers'
import express from 'express'
const router = express.Router()

router.post('/add-service',controllers.addService)

module.exports = router