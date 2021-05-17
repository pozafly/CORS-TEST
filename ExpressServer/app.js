const express = require('express');
const app = express();
const port = 3000;
const router = require('./router/main')(app);

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const cors = require('cors');

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);



app.listen(port, () => {
  console.log(`Exam listening at http: http://localhost:${port}`);
});