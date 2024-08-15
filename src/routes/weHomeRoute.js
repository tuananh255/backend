import * as controllers from '../controllers'
import express from 'express'
const router = express.Router()

router.post('/add-we',controllers.addWeHome)
router.get('/get-all-we',controllers.getAllWeHome)
router.get('/get-we/:id',controllers.getAllWeId)
router.put('/update-we',controllers.updateWe)
router.delete('/delete-we/:id',controllers.deleteWe)

module.exports = router