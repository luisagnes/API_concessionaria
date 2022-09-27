const createError = require('http-errors');

const estoque = [
    {
        "id": 1,
        "Ano_de_fabricacao": "2021/22",
        "Modelo": { "nome": "moto 1" },
        "Quantidade": "0",
        "Preco": "R$28.000,00",
    },
    {
        "id": 2,
        "Ano_de_fabricacao": "2019/20",
        "Modelo": { "nome": "moto 2" },
        "Quantidade": "1",
        "Preco": "R$24.000,00",
    },
    {
        "id": 3,
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
    const localizar = estoque.find((item) => item.id === Number(req.params.id));
    if (!localizar) {
      return res.status(404).json({ msg: "Estoque não localizado" });
    }
    res.json(localizar);
}

function atualizarEstoques(req, res, next) {
    const localizar = estoque.find(
      (estoques) => estoques.id === Number(req.params.id)
    );
    if (!localizar) {
        return res.status(404).json({ msg: "Estoque não encontrado" });
    }
    localizar.Ano_de_fabricacao = req.body.Ano_de_fabricacao;
    localizar.Modelo = req.body.Modelo;
    localizar.Quantidade = req.body.Quantidade;
    localizar.Preco = req.body.Preco;
    res.status(200).json({ msg: "Cobrança atualizado com sucesso" });
  }
  function criarEstoque (req, res, next){
    const novoEstoque = {
    id: estoque[estoque.length-1].id + 1,
    Ano_de_fabricacao: req.body.Ano_de_fabricacao,
    Modelo: req.body.Modelo,
    Quantidade: req.body.Quantidade,
    Preco: req.body.Preco,
    }
    estoque.push(novoEstoque);
    res.status(201).json(novoEstoque);
}

function removerEstoques (req, res, next) {
    const localizar = estoque.findIndex(estoques => estoques.id === Number(req.params.id));
    if(localizar < 0){
            return res.status(404).json({msg:"Estoque não existe"});
    }
    estoque.splice(localizar, 1);
    res.status(200).json({msg:"Estoque deletado com sucesso"});
}

module.exports = { listarEstoque, listarEstoquesPorId, criarEstoque, atualizarEstoques, removerEstoques };