const db_3934 = require('../config/database_ADN/db_3934')

exports.getdata = (req, res) => {
  const { ADN_Number, keyword, start_date, end_date} = req.body
  
  // Cek Data
  let query = ''
  if (keyword == '' && start_date == '' && end_date == '') {
    query = 'SELECT * FROM sms_in'
  } else {
    query = 'SELECT * FROM sms_in WHERE'
  }
  let data = []

  if (keyword != '') {
    query += ' sms LIKE ?'
    data.push(keyword)
    
  }
  if (start_date != '' && keyword != '' || end_date != '' && keyword != '') {
    query += ' AND'
  } 
  
  if (start_date != '' && end_date != '') {
    query += ' tanggal BETWEEN ? AND ?'
    data.push(start_date, end_date)
  } else {
    if (start_date != '') {
      query += ' tanggal = ?'
      data.push(start_date)
    } else if (end_date != '') {
      query += ' tanggal = ?'
      data.push(end_date)
    }
  }

  if (ADN_Number == '3934') {
    const db_3934 = require('../config/database_ADN/db_3934')
    console.log(query, data)
    db_3934.query(query, data, (error, result) => {
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
}

exports.getkeyword = (req, res) => {
  const { ADN_Number } = req.body
  if (ADN_Number == '3934') {
    // Query get keyword data
    db_3934.query('SELECT keyword FROM keyword', (error, result) => {
      if (error) {
        return res.status(500).json({
          errorMessage: error
        })
      }

      return res.status(200).json({
        data: result
      }) 
    })

    // Disconnect database
    

  }
  
}

exports.requestADN = (res, req) => {
  const { ADN_Number, ADN_Type, keyword, ADN_Price, sms_success, sms_reject, program_start, program_end, program_desc, program_name} = req.body
  if (ADN_Number == '3439') {
    const db_3934 = require('../config/database_ADN/db_3934')
  }
  

  db_3934.end((err) => {
    if (err) {
      console.log(err)
    } else {
      console.log("MySQL Disconnected....")
    }
  })

  return res.status(200).json({
    message: "Succes Request Adn"
  })
}
