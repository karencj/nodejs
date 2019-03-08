const Pool = require('pg').Pool
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'postgres',
// password: 'jamal',
//   port: 5432,
// })

const pool = new Pool({
  user: 'pdv',
  host: '35.243.253.123',
  database: 'db_pdv',
  password: 'NTI3Yjc0NWU0ZGNhMDllZTgxYWJhMmEz',
  port: 5432,
})

module.exports = {
    pool
}