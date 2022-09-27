var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

var indexRouter = require('./routes/index');
var routerBoletos = require('./routes/boletosRouter');
var routerEstoque = require('./routes/estoqueRouter');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/API_Concessionarias', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/', indexRouter);
app.use('/boletos', routerBoletos);
app.use('/criar', routerBoletos);
app.use('/atualizar', routerBoletos);
app.use('/excluir', routerBoletos);
app.use('/estoque', routerEstoque);
app.use('/criar', routerEstoque);
app.use('/atualizar', routerEstoque);
app.use('/excluir', routerEstoque);




module.exports = app;