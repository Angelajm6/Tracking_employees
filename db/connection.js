const mysql2 = require('mysql2');

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'business',
    password: 'panda.23$',
});
 
module.exports = connection;