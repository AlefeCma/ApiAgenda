const validatePhone = require('../utils/validateTelefone')

const validateName = (req, res, next) => {

    const { body } = req

    if (body.Nome === undefined) {
        return res.status(400).json({ massage: 'the filed "name" is required' })
    } else if (body.Nome === '') {
        return res.status(400).json({ massage: 'the filed "name" is required' })
    }
    next()
}

const validateEmail = (req, res, next) => {

    const { body } = req

    if (body.Email === undefined) {
        return res.status(400).json({ massage: 'the filed "Email" is required' })
    } else if (body.Email === '') {
        return res.status(400).json({ massage: 'the filed "Email" is required' })
    }
    next()
}
const validateTelefone = (req, res, next) => {

    const { body } = req

    if (body.Telefone === undefined) {
        return res.status(400).json({ massage: 'the filed "Telefone" is required' })
    } else if (body.Telefone === '') {
        return res.status(400).json({ massage: 'the filed "Telefone" is required' })
    }
    next()
}
const validateSenha = (req, res, next) => {

    const { body } = req

    if (body.Senha === undefined) {
        return res.status(400).json({ massage: 'the filed "Senha" is required' })
    } else if (body.Senha === '') {
        return res.status(400).json({ massage: 'the filed "Senha" is required' })
    }else if(body.Senha.length  < 6){
        return res.status(400).json({ massage: 'the filed "Senha" low' })
    }
    next()
}


module.exports = {
    validateName,
    validateEmail,
    validateTelefone,
    validateSenha
}