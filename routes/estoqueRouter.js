const e = require('express');
const express = require('express');
const router = express.Router();
const estoqueController = require('../controllers/estoqueControllers');

const app = express();

router.get('/', estoqueController.listarEstoque );

router.get('/:id', estoqueController.listarEstoquesPorId);

router.post('/', estoqueController.criarEstoque);

router.put('/:id', estoqueController.atualizarEstoques);

router.delete('/:id', estoqueController.removerEstoques);

module.exports = router;
