const db = require('../config/coonection-db')
const bcrypt = require('bcryptjs');
const token = require('../config/cookie-token')

exports.register = (req, res) => {
  // Get JSON data in request body
  const { username, password, passwordConfirm, region, status } = req.body

  db.query('SELECT user_domain FROM users WHERE user_domain = ?', [username], async (error, result) => {
    if (error) {
      return res.status(500).json({
        errorMessage: error
      })
    }
    if (result.length > 0) {
      return res.status(406).json({
        message: 'that user is already in use'
      })
    } else if (password !== passwordConfirm) {
      return res.status(403).json({
        message: 'Password do not match'
      })
    }
    
    // Hashing Password
    let hashedPassword = await bcrypt.hash(password, 8)
    console.log(hashedPassword)

    db.query('INSERT INTO users SET ? ', {user_domain: username, password: hashedPassword, regional: region, status: status}, (error, result) => {
      if (error) {
        return res.status(500).json({
          message: error
        })
      } else {
        return res.status(201).json({
          message: "Registrasi Sukses",
          passwordHash: hashedPassword
        })
      }
    })
  })
}

exports.login = (req, res) => {
  // Get JSON data in request body
  const { username, password} = req.body

  db.query('SELECT * FROM users WHERE user_domain = ?', [username], async (error, result) => { 
    if (error) {
      return res.status(500).json({
        errorMessage: error
      })
    }
    

    if (result[0] === undefined) {
      return res.status(500).json({
        Message: "user or password is empty"
      })
    }


    // Compare password with bcrypto
    const checkPassword = await bcrypt.compare(password, result[0].password)
    
    if (checkPassword) {
      const tokenCookie = token.setCookie(result[0].id)
      res.cookie('session_token', tokenCookie, {
        secure: true,
        sameSite:'none',
      })
      console.log("login succes")

      return res.status(202).json({
        message: "Login succes",
        id: result[0].id,
        token: tokenCookie
      })
    } else {
      return res.status(403).json({
        message: "Password is Wrong"
      })
    }
  })
}

exports.logout = (req, res) => {
  res.clearCookie(process.env.COOKIE_NAME);
  return res.status(200).json({
    message: "Logout succes"
  })
}

exports.checkSession = (req, res, next) => {
  const {cookies} = req.body
  console.log(cookies)
  if (cookies == undefined) {
    return res.status(403).json({
      message: 'access is denied'
    })
  }
  

  const resultToken = token.checkCookie(cookies)
  if (resultToken.message == 'access is denied' && resultToken.data == undefined) {
    return res.status(403).json({
      message: resultToken.message
    })
  }
  
  res.locals.id = resultToken.data
  console.log(resultToken.data)
  next()
}

exports.getStatus = (req, res) => {
  db.query('SELECT status FROM users WHERE id = ? ', [res.locals.id], (error, result) => {
    if (error) {
        return res.status(500).json({
          errorMessage: error
        })
    }

    let status = result[0].status
    return res.status(200).json({
      statusadmin: status
    })
  })
}