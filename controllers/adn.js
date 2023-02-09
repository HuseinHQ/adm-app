const db = require('../config/coonection-db')

exports.getdata = (req, res) => {
  //const { id_adn, keyword, start_date, end_date} = req.body
  let query = "WHERE tanggal BETWEEN ? AND ?"
  let data = ", [start_date, end_date]"
  db.query('SELECT * FROM sms_in ', (error, result) => {
    if (error) {
      return res.status(500).json({
        errorMessage: error
      })
    }

    return res.status(200).json({
      data: result
    })
  })
}