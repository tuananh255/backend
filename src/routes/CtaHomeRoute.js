import * as controllers from '../controllers'
import express from 'express'
const router = express.Router()

router.post('/cta',controllers.addCtaHome)
router.get('/get-all-cta',controllers.getAllCtaHome)
router.get('/get-cta/:id',controllers.getAllCtaId)
router.put('/update-cta',controllers.updateCta)
router.delete('/delete-cta/:id',controllers.deleteCta)

module.exports = router