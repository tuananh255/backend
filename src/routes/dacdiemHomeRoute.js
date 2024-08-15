import * as controllers from '../controllers'
import express from 'express'
const router = express.Router()

router.post('/add-dd',controllers.addDdHome)
router.get('/get-all-dacdiem',controllers.getAllNoibat)
router.get('/get-dacdiem/:id',controllers.getAllDacDiemId)
router.put('/update-dacdiem',controllers.updateDacDiem)
router.delete('/delete-dacdiem/:id',controllers.deleteNoibat)

module.exports = router