import * as controllers from '../controllers'
import express from 'express'
const router = express.Router()

router.post('/add-service',controllers.addService)
router.put('/update-service', controllers.updateService); // Để cập nhật dịch vụ
router.get('/get-all-services', controllers.getAllServices); // Để lấy tất cả dịch vụ
router.get('/get-service/:id', controllers.getServiceById); // Để lấy dịch vụ theo ID
router.delete('/delete-service/:id', controllers.deleteService); // Để xóa dịch vụ
module.exports = router