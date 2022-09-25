const express = require('express');
const router = express.Router();
const boletosController = require('../controllers/boletoController');

const app = express();

router.get('/', boletosController.listarBoletos );

router.get('/:id', boletosController.listarBoletosPorId );

router.post('/', boletosController.criarBoletos);

router.put('/:id', boletosController.atualizarBoletos);

router.delete('/:id', boletosController.removerBoletos);

module.exports = router;