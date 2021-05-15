const express = require('express');
const app = express();
const port = 3000;
const router = require('./router/main')(app);

app.all('/*', (req, res, next) => {
  // res.header('Access-Control-Allow-Origin', '*');
  // res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

const name = [
  { id: 1, name: '11'},
  { id: 2, name: '22'},
  { id: 3, name: '33'},
];

app.get('/', (req, res) => {
  console.log(req)
  console.log(res)
  res.send('Hello World!');
});

app.get('/api/name', (req, res) => {
  console.log('왓수다')
  res.send(name);
});

app.listen(port, () => {
  console.log(`Exam listening at http: http://localhost:${port}`);
});