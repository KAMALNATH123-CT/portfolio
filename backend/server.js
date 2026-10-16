const express = require('express')
const cors = require('cors')

require('dotenv').config();
console. log(process.env.NAME)
// const PORT = 5000;
const PORT = process.env. PORT;
const app = express();

app. listen(PORT);

app.use(cors())
app.get('/user', (req, res) => {
  res.send("app is working")
});

app.get('/weather', (req, res) => {
      res.json( [{
        city: "coimbatore",
        temp: 42,
        rain: false
      }])
})