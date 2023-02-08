const db = require('../config/coonection-db')

exports.getall = (req, res) => {
    console.log(res.locals.id)
    db.query('SELECT status FROM users WHERE id = ? ', [res.locals.id], (error, result) => {
        if (error) {
            return res.status(500).json({
              errorMessage: error
            })
        }

        let status = result[0].status
        if (status == 'admin') {
            db.query('SELECT * FROM users', (error, result) => {
                if (error) {
                    return res.status(500).json({
                      errorMessage: error
                    })
                }

                return res.status(200).json({
                    data: result
                })
            })
        } else if (status == 'regional'){
            db.query('SELECT * FROM users WHERE status = "regional" OR status = "user"', (error, result) => {
                if (error) {
                    return res.status(500).json({errorMessage: error})
                }

                return res.status(200).json({data: result})
            })
        } else {
            db.query('SELECT * FROM users WHERE status = "user"', (error, result) => {
                if (error) {
                    return res.status(500).json({errorMessage: error})
                }

                return res.status(200).json({data: result})
            })
        }
    })
}