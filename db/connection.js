const mysql2 = require('mysql2');

const connection = mysql2.createConnection({
host: 'localhost',
user: 'root',
database: 'business',
password: 'password',
});
 
module.exports = connection;