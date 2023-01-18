const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send({ message: 'login' });
});

app.listen(3002, () => {
  console.log('server run http://localhost:3002');
});
