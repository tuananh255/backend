import * as controllers from '../controllers'
import express from 'express'
const router = express.Router()

router.post('/add-info',controllers.addInfo)
router.get('/get-all-info',controllers.getAllInfo)
router.put('/update-info',controllers.updateInfo)

router.post('/add-setting',controllers.addSetting)
router.get('/get-all-setting',controllers.getAllSetting)
router.put('/update-setting',controllers.updateSetting)

module.exports = router