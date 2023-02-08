const express = require("express")
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.options('*', cors());

// Parse URL-encoded bodies (as sent by HTML form)
app.use(express.urlencoded({extended: false}))

// Parse JSON bodies (as sent by API client)
app.use(express.json())

//Set Cookie
app.use(cookieParser());

//Define route api
app.use('/api/v1', require('./routes/general'))

app.listen(5000, () => {
  console.log("Server started on port 5000");
});