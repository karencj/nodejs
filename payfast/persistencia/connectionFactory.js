var mysql = require('mysql');

function createDBConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: ''
    });
}

module.exports = function () {
    return createDBConnection;
}