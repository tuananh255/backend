import * as controllers from '../controllers'
import express from 'express'
const router = express.Router()

router.post('/feedback',controllers.addFbHome)
router.get('/get-all-feedback',controllers.getAllFb)
router.get('/get-feedback/:id',controllers.getAllFbId)
router.put('/update-feedback',controllers.updateFb)
router.delete('/delete-feedback/:id',controllers.deleteFb)

module.exports = router