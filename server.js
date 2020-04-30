const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));

app.post('/pagar', (req, res) => {
  console.log(req.body);
  return res.send({
    success: true,
  });
});

app.listen(process.env.PORT || 8080);
