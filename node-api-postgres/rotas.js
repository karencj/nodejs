
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

      
    
        require('./usuario/usuario-rest')(app);
        require('./cliente/cliente-rest')(app);
    }
};
