import * as controllers from '../controllers'
import express from 'express'
const router = express.Router()

// ứng viên
router.post('/add-ungvien',controllers.addUngvien)
router.get('/get-all-ungvien',controllers.getAllUngVien)
router.get('/get-ungvien/:id',controllers.getAllUngvienId)
router.put('/update-ungvien',controllers.updateUngvienStatus)
router.delete('/delete-ungvien/:id',controllers.deleteUngVien)

// bài viết
router.post('/add-baiviet',controllers.addBaiviet)
router.get('/get-all-baiviet',controllers.getAllBaiviet)
router.get('/get-baiviet/:id',controllers.getBaivietId)
router.put('/update-baiviet',controllers.updateBaiviet)
router.delete('/delete-baiviet/:id',controllers.deleteBaiviet)


module.exports = router