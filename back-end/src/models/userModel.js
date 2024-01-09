const connection = require('./connection')
const crpitografia = require('../utils/criptografiaSenha')

const createUser = async (user) => {

    const { Nome, Email, Telefone, Senha } = user

    const newPassword = await crpitografia.criptografiaSenha(Senha.toString());


    const query = 'insert into Usuarios(Nome,Email,Telefone,Senha)values(?,?,?,?)'

    const createdUser = await connection.execute(query, [Nome, Email, Telefone, newPassword])

    return createdUser
}
const ListUser = async () => {
    const query = 'select * from Usuarios'
    const ListUser = await connection.execute(query)
    return ListUser
}

const ValidateUserEmail = async (Email) => {


    const query = 'SELECT * FROM Usuarios WHERE Email = ?';

    const userV = await connection.execute(query, [Email])
    console.log(userV)
    return userV
}

const Login = async (user) => {
    
    console.log(user)

    const {Email,Senha} = user
    
    console.log(Senha)

    const newPassword = await crpitografia.criptografiaSenha(Senha.toString())
    
    const query = 'SELECT * FROM Usuarios WHERE Email = ? AND Senha = ?'

    const userLogin = await connection.execute(query, [Email, newPassword])
    
    return userLogin
}


module.exports = {
    createUser,
    ListUser,
    ValidateUserEmail,
    Login
}



