const express = require('express')

const userMiddleware = require('../middleware/userMiddleware')
const userController = require('../controllers/userController')

const utilValidateTelefone = require('../utils/validateTelefone')


const router = express.Router()

const { validateName,validateEmail,validateTelefone,validateSenha } = userMiddleware

router.post('/user', utilValidateTelefone.validateTelefone,
    validateName, validateEmail, validateTelefone,
    validateSenha, userController.createUser)
router.get('/user',userController.ListUser)

module.exports = router