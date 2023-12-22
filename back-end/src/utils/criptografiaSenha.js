const bcrypt = require('bcryptjs');


const criptografiaSenha = async (senha) => {
    try {
        const SenhaCript = await bcrypt.hash(senha,10);
        return SenhaCript;
        
    } catch {
        console.log('error crpito');
    }    
}
module.exports = {
    criptografiaSenha
};
