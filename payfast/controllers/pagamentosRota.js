// é preciso receber essa variavel app
module.exports = function(app) {
    app.get('/pagamentos', function (req, res) {
        console.log('/pagamentos');
        res.send('OK.');
    });

    app.delete('/pagamentos/pagamento/:id', function(req,res) {
        console.log('processando requisição de cancelamento de pagamento');
        var id  = req.params.id;
        var pagamento = {};
        pagamento.id = id;

        pagamento.status = 'CANCELADO';

        var connection = app.persistencia.connectionFactory();
        var pagDAO = new app.persistencia.PagamentoDao(connection);

        pagDAO.atualiza(pagamento, function (erro, resultado) {
            if (erro) {
                console.log('Erro no banco');
                res.status(500).send(erro);
            }
            console.log('Pagamento cancelado');
            res.status(202).send(pagamento);
        });
    });

    app.put('/pagamentos/pagamento/:id', function (req, res) { 
        console.log('processando requisição de edição de pagamento');
        var id  = req.params.id;
        var pagamento = {};
        pagamento.id = id;

        pagamento.status = 'CONFIRMADO';

        var connection = app.persistencia.connectionFactory();
        var pagDAO = new app.persistencia.PagamentoDao(connection);

        pagDAO.atualiza(pagamento, function (erro, resultado) {
            if (erro) {
                console.log('Erro no banco');
                res.status(500).send(erro);
            }
            console.log('Pagamento confirmado');
            res.send(pagamento);
        });
    });

    app.post('/pagamentos/pagamento', function (req, res) {

        req.assert("forma_de_pagamento", "Forma de pagamento é obrigatório!").notEmpty();
        req.assert("valor", "Valor é obrigatório e deve ser um decimal!").notEmpty().isFloat();

        var erros = req.validationErrors();

        if (erros) {
            console.log('Erros de validação!');
            res.status(400).send(erros);
            return;
        }

        var pagamento = req.body;
        console.log(pagamento);
        console.log('processando requisição de novo pagamento');

        pagamento.status = 'CRIADO';
        pagamento.data = new Date;

        var connection = app.persistencia.connectionFactory();
        var pagDAO = new app.persistencia.PagamentoDao(connection);

        pagDAO.salva(pagamento, function(erro, resultado){

            if (erro) {
                console.log('Erro no banco');
                res.status(500).send(erro);
            } else {
                console.log('Pagamento criado');
                res.location('/pagamentos/pagamento/' + resultado.insertId); // enviando a localização do novo registro criado
                
                var response = {
                    dados_do_pagamento: pagamento,
                    links:  [
                        {
                            href:"http://localhost:3000/pagamentos/pagamento/" + resultado.insertId,
                            rel:"confirmar",
                            method:"PUT"
                        },
                        {
                            href:"http://localhost:3000/pagamentos/pagamento/" + resultado.insertId,
                            rel:"cancelar",
                            method:"DELETE"
                        }
                    ]
                }

                res.status(201).json(pagamento); // ao inves de usar send
            }

        });
    });
}