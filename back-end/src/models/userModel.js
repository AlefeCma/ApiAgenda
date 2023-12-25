const connection = require('./connection')
const crpitografia = require('../utils/criptografiaSenha')
const createUser = async (user) => {

    const { Nome, Email, Telefone, Senha } = user

    const SenhaNova = await crpitografia.criptografiaSenha(Senha.toString());
    console.log(SenhaNova)

    const query = 'insert into Usuarios(Nome,Email,Telefone,Senha)values(?,?,?,?)'

    const createdUser = await connection.execute(query, [Nome, Email, Telefone, SenhaNova])

    return createdUser
}
const ListUser = async () => {
    const query = 'select * from Usuarios'
    const ListUser = await connection.execute(query)
    return ListUser
}

const ValidateUser = async (Email) =>{

const query = 'SELECT * FROM Usuarios WHERE Email = ?';

const ValidateUser = await connection.execute(query,[Email])

return ValidateUser
}
console.log(ValidateUser('alefedonato1@gmail.com.br'))
module.exports = {
    createUser,
    ListUser,
    ValidateUser
}



