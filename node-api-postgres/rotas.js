
const fetch = require('node-fetch')

module.exports = {
     configurar(app) {

        app.get('/', (request, response) => {
            response.json({ info: 'Node.js, Express, and Postgres API' })
        });
        
        app.get('/teste', async (req, res) => {

            try {
                const response = await fetch('https://api.github.com/users/mateusconstanzo')
                const user = await response.json()
                user.login = 'TESTE KAREN MUDAR LOGIN'
                //console.log(user.login)
                res.send(user)
            } catch (err) {
                res.status(500).send({})
            }
        })
    
        require('./usuario/usuario-rest')(app);
        require('./cliente/cliente-rest')(app);
    }
};