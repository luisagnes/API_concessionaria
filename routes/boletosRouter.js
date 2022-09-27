const express = require('express');
const router = express.Router();
const boletosController = require('../controllers/boletoController');

const app = express();

router.get('/', boletosController.listarBoletos );

router.get('/:id', boletosController.listarBoletosPorId );

router.post('/boletos', boletosController.criarBoletos);

router.put('/boletos/:id', boletosController.atualizarBoletos);

router.delete('/boletos/:id', boletosController.removerBoletos);

module.exports = router;