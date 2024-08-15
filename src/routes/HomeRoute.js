import * as controllers from '../controllers'
import express from 'express'
const router = express.Router()

router.put('/incrementview',controllers.incrementViewCount)
router.get('/get-view',controllers.getViewCount)

module.exports = router