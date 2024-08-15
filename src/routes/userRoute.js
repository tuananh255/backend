import * as controllers from '../controllers'
import express from 'express'
const router = express.Router()

router.post('/register-auth',controllers.registerUser)
router.post('/login-auth',controllers.login)

router.put('/update-user/:id', controllers.updateUser); 

router.get('/get-all-auth',controllers.getAllUser)
router.get('/get-auth/:id',controllers.getUserId)

router.delete('/delete-auth/:id',controllers.deleteUser)


module.exports = router