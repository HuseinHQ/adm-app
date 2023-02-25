const mysql = require('mysql')
const dotenv = require('dotenv')

const db_3934= mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD_3934,
  database: process.env.DATABASE_NAME_3934
})

db_3934.connect((err) => {
  if (err) {
    console.log(err)
  } else {
    console.log("Database 3934 Connected....")
  }
})

module.exports = db_3934