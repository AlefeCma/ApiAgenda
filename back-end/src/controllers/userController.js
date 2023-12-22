const userModel = require('../models/userModel')
const utilsCrpitografiaSenha = require('../utils/criptografiaSenha')


const createUser = async (req, res) => {
    const createUser = await userModel.createUser(req.body)
    console.log(req.body)
    return res.status(201).json({ message: 'created now user' })
}
const ListUser = async (req, res) => {
    const ListUser = await userModel.ListUser()
    return res.status(200).json(ListUser[0])
}
module.exports = {
    createUser,
    ListUser
};
