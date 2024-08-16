import * as controllers from '../controllers'
import express from 'express'
const router = express.Router()

router.post('/add-baivietcontent',controllers.addBaivietContent)
router.get('/get-all-baivietcontent',controllers.getAllBaivietContent)
router.get('/get-baivietcontent/:id',controllers.getBaivietContentById)
router.put('/update-baivietcontent',controllers.updateBaivietContent)
router.delete('/delete-baivietcontent/:id',controllers.deleteBaivietContent)
router.put('/incrementview',controllers.incrementViewCountBaiviet)
router.get('/get-view',controllers.getAllViewCountBaiviet)
module.exports = router