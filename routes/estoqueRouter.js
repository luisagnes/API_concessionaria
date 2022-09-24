const express = require('express');
const router = express.Router();
const estoqueController = require('../controllers/estoqueControllers');

const app = express();

router.get('/', estoqueController.listarEstoque );

module.exports = router;
