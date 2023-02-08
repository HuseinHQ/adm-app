var jwt = require('jsonwebtoken');
exports.setCookie = (value) => {
  const expire = Math.floor(Date.now() / 1000) + (60 * 60)
  let token = jwt.sign({
    exp: expire,
    data: value
  }, process.env.COOKIE_NAME)
  return token
}

exports.checkCookie = (value) => {
  let dataNow = {
    message: "",
    data: undefined
  }
  
  jwt.verify(value,  process.env.COOKIE_NAME, (err, result) => {
    var seconds = 1000;
    var d = new Date();
    var t= d.getTime();

    if(err || result.exp < Math.round(t / seconds)){
      dataNow = {
        message: "access is denied",
        data: undefined
      }
      
    } else{
      let data = result.data
      dataNow =  {
        message: "Successfully Verified",
        data: data
      }
    }
  })

  console.log(dataNow)
  return dataNow
  
}

