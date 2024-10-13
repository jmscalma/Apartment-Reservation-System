const mysql = require('mysql')
const config = require('../../../config/db.config')

const pool = mysql.createPool({
    host: config.host,
    port: config.port,
    user: config.user,
    database: config.database
})

const handler = (req, res) => {
    
}

module.exports = handler 