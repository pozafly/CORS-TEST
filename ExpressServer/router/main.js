module.exports = app => {
  app.get('/a', (req, res) => {
    res.send('야야야');
  });

  app.get('/noCORS', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.send('pass');
  });

  app.post('/preflight', (req, res) => {
    res.send('pass');
  });

  app.get('/credentialed', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.send('pass');
  });
}