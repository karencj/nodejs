var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var validator = require('express-validator');

module.exports = function () {
    var app = express();

    // para saber navegar no body da requisicaço
    app.use(bodyParser.urlencoded({extended: true}));
    // ensinando a aplicação a fazer body-parser de json
    app.use(bodyParser.json());

    // usar esta lib para validações
    app.use(validator());

    // colocando dentro de app a pasta de controllers
    consign()
        .include('controllers')
        .then('persistencia')
        .into(app); // a variavel app vai passar a ter dentro dela todo 'conhecimento' que 
                    // tem dentro da pasta controllers
    return app;
}