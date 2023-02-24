const db = require('../config/coonection-db')

exports.getdata = (req, res) => {
  const { keyword, start_date, end_date} = req.body
  
  // Cek Data
  let query = ''
  if (keyword == '' && start_date == '' && end_date == '') {
    query = 'SELECT * FROM sms_in'
  } else {
    query = 'SELECT * FROM sms_in WHERE'
  }
  let data = []

  console.log("Data:", keyword, start_date, end_date)
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
  console.log(data, query)
  
  db.query(query, data, (error, result) => {
    if (error) {
      return res.status(500).json({
        errorMessage: error
      })
    }
    console.log(result)
    return res.status(200).json({
      data: result
    })
  })
}

exports.getkeyword = (req, res) => {
  db.query('SELECT keyword FROM keyword', (error, result) => {
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
