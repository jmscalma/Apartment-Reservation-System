const mysql = require('mysql');
const config = require('../config/db.config');

const connection = mysql.createConnection({
    host: config.host,
    port: config.port,
    user: config.user,
    database: config.database
})

connection.connect((err) => {
    if(err){
        console.error('Error connecting to db: ', err);
        return;
    }
    console.log('Connected to database successfully');
});

connection.end();



