const express = require('express');
const router = express.Router();
const revisaoController = require('../controllers/revisaoController');

const app = express();

router.get('/', revisaoController.listarRevisao );

router.get('/:id', revisaoController.listarRevisaoPorId );

router.post('/', revisaoController.criarRevisao );

module.exports = router;