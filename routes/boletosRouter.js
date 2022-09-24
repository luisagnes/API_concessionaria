const express = require('express');
const router = express.Router();
const boletosController = require('../controllers/boletoController');

const app = express();

router.get('/', boletosController.listarBoletos );

router.get('/:id', boletosController.listarBoletosPorId );

module.exports = router;