const userModel = require('../models/userModel')

const createUser = async (req, res) => {
    const createUser = await userModel.createUser(req.body)
    return res.status(201).json({ message: 'created now user' })
}

const ListUser = async (req, res) => {
    const ListUser = await userModel.ListUser()
    return res.status(200).json(ListUser[0])

}

const validateUser = async (req, res) => {
    const { body } = req
    console.log(body)
    const user = await userModel.ValidateUserEmail(body.Email)

    if (Object.keys(user[0]).length === 0) {
        const newUser = await userModel.createUser(body)
        return res.status(201).json({ message: 'User created' })
    } else {
        return res.status(200).json(user[0])
    }
}

const login = async (req, res) => {

    const { body } = req
    
    const user = await userModel.Login(body.Email,body.Senha)

        if (Object.keys(user[0]).length === 0) {
            return res.status(404).json({ message: 'User not exists' })
        } else {
            return res.status(200).json({ message: 'Usuario logado' })
        }

    
}


module.exports = {
    createUser,
    ListUser,
    validateUser,
    login
};
