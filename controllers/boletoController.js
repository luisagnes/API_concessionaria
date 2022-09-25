const createError = require('http-errors');

const boletos = [
    {
        "id": "1",
        "data_entrada": "05/05/2022",
        "vencimento": "05/06/2022",
        "valor": "R$250,00",
        "situacao": "Pago",
    },
    {
        "id": "2",
        "data_entrada": "28/04/2022",
        "vencimento": "28/07/2022",
        "valor": "R$360,00",
        "situacao": "Pago",
    },
    {
        "id": "3",
        "data_entrada": "16/02/2022",
        "vencimento": "16/08/2022",
        "valor": "R$570,00",
        "situacao": "Atrasado",
    },
];

function listarBoletos (req, res, next) {
    res.json(boletos);
}

function listarBoletosPorId (req, res, next) {
    const id = Number(req.params.id);
    if (id > boletos.length) return next(createError(404, "Boleto não localizado!"));
    res.json(boletos[id]);
}

function criarBoletos (req, res, next) {
    const novoBoleto = {
        "id": req.body.id,
        "data_entrada": req.body.data_entrada,
        "vencimento": req.body.vencimento,
        "valor": req.body.valor,
        "situacao": "pendente"
    }
    boletos.push(novoBoleto);
    res.status(201).json(novoBoleto);
}

function atualizarBoletos (req, res, next) {
    const boletoLocalizado = boletos.find(boleto => 
        boleto.id === Number(req.params.id)
        );
        if(!boletoLocalizado) {
            return res.status(404).json({msg: "não achamos o seu boleto"})
        }
        boletoLocalizado.data_entrada = req.body.data_entrada;
        boletoLocalizado.vencimento = req.body.vencimento;
        boletoLocalizado.valor = req.body.valor;
        boletoLocalizado.situacao = req.body.situacao;
        res.status(204).end();
}

function removerBoletos (req, res, next) {
    const posicaoBoleto = boletos.findIndex(boleto => 
        boleto.id === Number(req.params.id));
    if(posicaoBoleto < 0){
        return res.status(404).json({msg: "não achamos o seu boleto"});
    }
    boletos.splice(posicaoBoleto, 1);
    res.status(204).end();
}

module.exports = { listarBoletos, listarBoletosPorId, criarBoletos, atualizarBoletos, removerBoletos };