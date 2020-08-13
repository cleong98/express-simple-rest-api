const mysql = require('mysql')
const config = require('../config/index')
const pool = mysql.createPool(config)

module.exports = pool