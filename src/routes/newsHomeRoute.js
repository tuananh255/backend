import * as controllers from '../controllers'
import express from 'express'
const router = express.Router()

router.post('/news',controllers.addNewsHome)
router.get('/get-all-news',controllers.getAllNews)
router.get('/get-news/:id',controllers.getAllNewsId)
router.put('/update-news',controllers.updateNews)
router.delete('/delete-news/:id',controllers.deleteNews)

module.exports = router