
const fetch = require('node-fetch')

module.exports = {
     configurar(app) {

        app.get('/', (request, response) => {
            response.json({ info: 'Node.js, Express, and Postgres API' })
        });
        
        app.get('/testePostExterno', async (req, res) => {

            try {
                const response = await fetch('https://httpbin.org/post', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({a: 1, b: 'Textual content'})
                  });
                  const content = await response.json();
                
                  console.log(content);
            } catch (err) {
                res.status(500).send({})
            }
        })

        app.post('/testePostOutraURL', async (req, res) => {
            console.log(req.body);
            try {
                const response = await fetch('https://gateway-homologation.tradeapp.com.br/auth', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        "x-api-key": "zr6Pvwuw7Q3ZVX6VQ3rDpaXdW7k768di98e5U3fI"
                    },
                    body: JSON.stringify({cpf: req.body.cpf , password:  req.body.password })
                  });
                  const content = await response.json();
                
                  console.log('>>>>>>>>>>>>token:' + content.data.token);
                  //res.send(content);

                  const URL =  'https://gateway-homologation.tradeapp.com.br/cliente/' + req.body.cpfCliente;
                  const response2 = await fetch(URL, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        "x-api-key": "zr6Pvwuw7Q3ZVX6VQ3rDpaXdW7k768di98e5U3fI",
                        "Authorization": "Bearer " + content.data.token 
                    }//,
                    //body: JSON.stringify({cpf: req.body.cpf , password:  req.body.password })
                  });

                  const content2 = await response2.json();
                  console.log(content2)
                  res.send(content2)
            } catch (err) {
                res.status(500).send({})
            }
        })
    
        require('./usuario/usuario-rest')(app);
        require('./cliente/cliente-rest')(app);
    }
};
