import * as controllers from '../controllers'
import express from 'express'
const router = express.Router()

router.post('/bannerhome',controllers.addBannerHome)
router.get('/get-all-banner',controllers.getAllBannerHome)
router.get('/get-banner/:id',controllers.getAllBannerId)
router.put('/update-banner',controllers.updateBanner)
router.delete('/delete-banner/:id',controllers.deleteBanner)

module.exports = router