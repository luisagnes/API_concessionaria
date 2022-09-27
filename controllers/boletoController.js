const createError = require('http-errors');

const boletos = [
    {
        "id": 1,
        "data_entrada": "05/05/2022",
        "vencimento": "05/06/2022",
        "valor": "R$250,00",
        "situacao": "Pago",
    },
    {
        "id": 2,
        "data_entrada": "28/04/2022",
        "vencimento": "28/07/2022",
        "valor": "R$360,00",
        "situacao": "Pago",
    },
    {
        "id": 3,
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
    const localizar = boletos.find((item) => item.id === Number(req.params.id));
    if (!localizar) {
      return res.status(404).json({ msg: "Estoque não localizado" });
    }
    res.json(localizar);
}

function atualizarBoletos (req, res, next) {
    const localizar = boletos.find(
      (boleto) => boleto.id === Number(req.params.id)
    );
    if (!localizar) {
        return res.status(404).json({ msg: "Boleto não encontrado" });
    }
    localizar.data_entrada = req.body.data_entrada;
    localizar.vencimento = req.body.vencimento;
    localizar.valor = req.body.valor;
    localizar.situacao = req.body.situacao;
    res.status(200).json({ msg: "Boleto atualizado com sucesso" });
  }
  function criarBoletos (req, res, next){
    const novaoBoleto  = {
    id: boletos[boletos.length-1].id + 1,
    data_entrada: req.body.data_entrada,
    vencimento: req.body.vencimento,
    valor: req.body.valor,
    situacao: req.body.situacao,
    }
    boletos.push(novaoBoleto);
    res.status(201).json(novaoBoleto);
}

function removerBoletos (req, res, next) {
    const localizar = boletos.findIndex(boleto => boleto.id === Number(req.params.id));
    if(localizar < 0){
            return res.status(404).json({msg:"Boleto não existe"});
    }
    boletos.splice(localizar, 1);
    res.status(200).json({msg:"Boleto excluído com sucesso"});
}

module.exports = { listarBoletos, listarBoletosPorId, criarBoletos, atualizarBoletos, removerBoletos };