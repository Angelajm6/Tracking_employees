const mysql = require('mysql2');

const connection = mysql2.createConnection({
host: 'localhost',
user: 'root',
database: 'employee_db',
password: 'password',
});
 
module.exports = connection;