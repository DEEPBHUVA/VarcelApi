const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/demo ', (req, res) => {
    res.send('Api World!');
});

app.listen(4000, () => {
  console.log('Example app listening on port 4000!');
});