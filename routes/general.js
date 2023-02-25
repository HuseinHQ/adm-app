const express = require('express')
const authController = require('../controllers/auth')
const adnController = require('../controllers/adn')
const userManagementController = require('../controllers/user-management')

const router = express.Router()

router.post('/login', authController.login)
router.post('/register', authController.register)
router.get('/logout', authController.checkSession, authController.logout)
router.post('/get-status', authController.checkSession, authController.getStatus)

// ADN
router.post('/getdataadn', authController.checkSession, adnController.getdata)
router.post('/getkeyword', authController.checkSession, adnController.getkeyword)
router.post('/request-adn', adnController.requestADN)

// User Management
router.post('/get-user', authController.checkSession, userManagementController.getall)
router.post('/getdatauser', authController.checkSession, userManagementController.getdatauser)
router.post('/deleteuser', authController.checkSession, userManagementController.deleteuser)
router.post('/edituser', authController.checkSession, userManagementController.edituser)


module.exports = router