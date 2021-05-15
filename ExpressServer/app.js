const express = require('express');
const app = express();
const port = 3000;
const router = require('./router/main')(app);

app.use(express.json());

app.get('/', (req, res) => {
  console.log(req)
  console.log(res)
  res.send('Hello World!');
});


app.listen(port, () => {
  console.log(`Exam listening at http: http://localhost:${port}`);
});