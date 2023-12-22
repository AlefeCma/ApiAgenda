

const validateTelefone = (req, res, next) => {

    const { body } = req;
    const telefone = body.Telefone;

    // Expressão regular para validar o telefone no formato (99)99999-9999 ou (99)9999-9999


    const regexTelefone = /^\(\d{2}\)\d{4,5}-\d{4}$/;

    if (!telefone) {
        return res.status(400).json({ message: 'O campo "Telefone" é obrigatório' });
    } else if (!regexTelefone.test(telefone)) {
        return res.status(400).json({ message: 'O campo "Telefone" não está correto' });
    }

    next();
}

module.exports = {
    validateTelefone
}
