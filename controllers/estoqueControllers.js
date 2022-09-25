const createError = require('http-errors');

const estoque = [
    {
        "id": "1",
        "Ano_de_fabricacao": "2021/22",
        "Modelo": { "nome": "moto 1" },
        "Quantidade": "0",
        "Preco": "R$28.000,00",
    },
    {
        "id": "2",
        "Ano_de_fabricacao": "2019/20",
        "Modelo": { "nome": "moto 2" },
        "Quantidade": "1",
        "Preco": "R$24.000,00",
    },
    {
        "id": "3",
        "Ano_de_fabricacao": "2020/21",
        "Modelo": { "nome": "moto 3" },
        "Quantidade": "3",
        "Preco": "R$35.000,00",
    },

];

function listarEstoque (req, res, next) {
    res.json(estoque);
}

function listarEstoquesPorId (req, res, next) {
    const id = Number(req.params.id);
    if (id > estoques.length) return next(createError(404, "estoque não localizado!"));
    res.json(estoques[id]);
}

function criarEstoque (req, res, next) {
    const novoEstoque = {
        "Ano de fabricacao": req.body.Ano_de_fabricacao,
        "Modelo": { "nome": req.body.modelo.nome },
        "Quantidade": req.body.Quantidade,
        "Preco": req.body.Preco
    }

    estoque.push(novoEstoque);
    res.status(201).json(novoEstoque);
}

function atualizarEstoques (req, res, next) {
    const estoqueLocalizado = estoque.find(estoques => 
        estoques.id === Number(req.params.id)
        );
        if(!estoqueLocalizado) {
            return res.status(404).json({msg: "não achamos nada no estoque"})
        }
        estoqueLocalizado.Ano_de_fabricacao = req.body.Ano_de_fabricacao;
        estoqueLocalizado.modelo.nome = req.body.modelo.nome;
        estoqueLocalizado.Quantidade = req.body.Quantidade;
        estoqueLocalizado.Preco = req.body.Preco;
        res.status(204).end();
}

function removerEstoques (req, res, next) {
    const posicaoEstoque = estoque.findIndex(estoques => 
        estoques.id === Number(req.params.id));
    if(posicaoEstoque < 0){
        return res.status(404).json({msg: "não achamos nada no seu estoque"});
    }
    estoque.splice(posicaoEstoque, 1);
    res.status(204).end();
}

module.exports = { listarEstoque, listarEstoquesPorId, criarEstoque, atualizarEstoques, removerEstoques };