import * as controllers from '../controllers'
import express from 'express'
const router = express.Router()

router.post('/nhansu',controllers.addNhanvien)
router.get('/get--all-nhansu',controllers.getAllNhanviens)
router.get('/get-nhansu/:id',controllers.getNhanvienById)
router.put('/update-nhansu',controllers.updateNhanvien)
router.delete('/delete-nhansu/:id',controllers.deleteNhanvien)

module.exports = router