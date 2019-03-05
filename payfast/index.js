// var express = require('express'); // passou para dentro do custom-express.js
var custom = require('./config/custom-express'); // express(); //aplicacao 
var app = custom(); // carrega a partir do require e acessa com ()

// para manter o servidor rodando
app.listen(3000, function() {
    console.log('Servidor na porta 3000')
});


// tirar do arquivo index.js, pois sua unica função é manter o servidor
// define as rotas a partir da aplicação
// req - requisição
// res - response
// app.get('/teste', function (req, res) {
//     console.log('/teste');
//     res.send('OK.');
// });