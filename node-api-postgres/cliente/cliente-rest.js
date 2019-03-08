const db = require('./cliente-service')

module.exports = app => {
    app.get('/clients', db.getClients)
    app.get('/clients/:id', db.getClientById)
    app.post('/clients', db.createClient)
    app.put('/clients/:id', db.updateClient)

    /**
     * This function comment is parsed by doctrine
     * @route DELETE /clients/{id}
     * @group client 
     * @param {string} id codigo do cliente - eg: 123
     * @returns {object} 200 - An array of user info
     * @returns {Error}  default - Unexpected error
     */
    app.delete('/clients/:id', db.deleteClient)
};


