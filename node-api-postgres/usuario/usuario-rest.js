const db = require('./usuario-service')

module.exports = app => {
    app.get('/users', db.getUsers)
    app.get('/users/:id', db.getUserById)
    app.post('/users', db.createUser)
    app.put('/users/:id', db.updateUser)

    /**
     * This function comment is parsed by doctrine
     * @route DELETE /users/{id}
     * @group user 
     * @param {string} id codigo do usuario - eg: 123
     * @returns {object} 200 - An array of user info
     * @returns {Error}  default - Unexpected error
     */
    app.delete('/users/:id', db.deleteUser)
};


