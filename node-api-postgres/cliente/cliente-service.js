const persistencia = require('../persistencia').pool

const getClients = (request, response) => {
    persistencia.query('SELECT * FROM 	usermgmt.clients ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  
  const getClientById = (request, response) => {
    const id = parseInt(request.params.id)
  
    persistencia.query('SELECT * FROM usermgmt.clients WHERE id = $1', [id], (error, results) => {
      if (error) {
        // throw error
        response.status(500).send(error);
      }
      console.log(results.rows)
      response.status(200).json(results.rows)
    })
  }
  
  const createClient = (request, response) => {
    const { id, name, email, mobile } = request.body
  
    persistencia.query('INSERT INTO usermgmt.clients (id, name, email, mobile) VALUES ($1, $2, $3, $4)',  [id, name, email, mobile], (error, results) => {
      if (error) {
        //console.log(error);
        response.status(500).send(error);
      }
      response.json(results).status(201);
    })
  }
  
  const updateClient = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email, mobile } = request.body
  
    persistencia.query(
      'UPDATE usermgmt.clients SET name = $1, email = $2, mobile = $3 WHERE id = $4',
      [name, email, mobile, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Client modified with ID: ${id}`)
      }
    )
  }
  
  const deleteClient = (request, response) => {
    console.log(request.params)
    const id = parseInt(request.params.id)
  
    persistencia.query('DELETE FROM usermgmt.clients WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      console.log(results);
      response.status(200).send(`Client deleted with ID: ${id}`)
    })
  }
  
  module.exports = {
    getClients,
    getClientById,
    createClient,
    updateClient,
    deleteClient,
  }