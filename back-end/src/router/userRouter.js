const express = require('express')

const userMiddleware = require('../middleware/userMiddleware')
const userController = require('../controllers/userController')

const utilValidateTelefone = require('../utils/validateTelefone')


const router = express.Router()

const { validateName,validateEmail,validateTelefone,validateSenha } = userMiddleware

router.post('/user', userController.validateUser)

router.get('/user',userController.ListUser)

router.post('/user/login',validateEmail,userController.login)

module.exports = router