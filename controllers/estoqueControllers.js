const createError = require('http-errors');

const estoque = [
    {
        "Ano de fabricacao": "2021/22",
        "Modelo": { "nome": "Moto 1 " },
        "Quantidade": "0",
        "Preco": "",
    },
    {
        "Ano de fabricacao": "2021/22",
        "Modelo": { "nome": "Moto 2 " },
        "Quantidade": "1",
        "Preco": "R$24.000,00",
    },

];

function listarEstoque (req, res, next) {
    res.json(estoque);
}

module.exports = { listarEstoque };