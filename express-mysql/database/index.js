var mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password : 'bijikadal',
    database : 'finalproject_dion'
})

module.exports = db