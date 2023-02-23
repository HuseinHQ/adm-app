const db = require('../config/coonection-db')

exports.getall = (req, res) => {
    console.log("Id: ",res.locals.id)
    db.query('SELECT status FROM users WHERE id = ? ', [res.locals.id], (error, result) => {
        if (error) {
            return res.status(500).json({
              errorMessage: error
            })
        }

        let status = result[0].status

        console.log("Status:", status)
        if (status == 'Web') {
            db.query('SELECT * FROM users', (error, result) => {
                if (error) {
                    return res.status(500).json({
                      errorMessage: error
                    })
                }

                return res.status(200).json({
                    data: result,
                    statusadmin: status
                })
            })
        } else if (status == 'Regional'){
            db.query('SELECT * FROM users WHERE status = "Regional" OR status = "User"', (error, result) => {
                if (error) {
                    return res.status(500).json({errorMessage: error})
                }

                return res.status(200).json({data: result})
            })
        } else {
            db.query('SELECT * FROM users WHERE status = "User"', (error, result) => {
                if (error) {
                    return res.status(500).json({errorMessage: error})
                }

                return res.status(200).json({data: result})
            })
        }
    })
}

exports.getdatauser = (req, res) => {
    const { id } = req.body
    db.query('SELECT * FROM users WHERE id = ?', [id], (error, result) => {
      if (error) {
        return res.status(500).json({
          errorMessage: error
        })
      }
      console.log(result[0])
  
      return res.status(200).json({
        data: result[0]
      })
    })
}

exports.edituser = (req, res) => {
    const {username, password, confirmPassword, status, region, id} = req.body
    if (password == undefined && confirmPassword == undefined || password == '' && confirmPassword == '' ) {
      db.query('UPDATE users SET ? WHERE id = ?', [{username: username, status: status,regional:region}, id], (error, result) => {
        if (error) {
          return res.status(500).json({
            errorMessage: error
          })
        }
        console.log("Update Data",result[0])
    
        return res.status(200).json({
          message: 'Succes Update Data'
        })
      })
    } else {
      return res.status(200).json({
        message: 'Failed Update Data'
      })
    }
}

exports.deleteuser = (req, res) => {
    const { id } = req.body
    db.query('DELETE FROM users WHERE id = ?', [id], (error, result) => {
      if (error) {
        return res.status(500).json({
          errorMessage: error
        })
      }
  
      return res.status(200).json({
        message: "Success Delete User"
      })
    })
}