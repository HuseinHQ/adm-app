const express = require('express')
const authController = require('../controllers/auth')
const adnController = require('../controllers/adn')
const userManagementController = require('../controllers/user-management')

const router = express.Router()

router.post('/login', authController.login)
router.post('/register', authController.register)
router.get('/logout', authController.checkSession, authController.logout)
router.post('/get-status', authController.checkSession, authController.getStatus)

router.post('/getdataadn', authController.checkSession, adnController.getdata)
router.get('/get-user', authController.checkSession, userManagementController.getall)

module.exports = router