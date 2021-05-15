module.exports = app => {
  app.get('/a', (req, res) => {
    res.send('야야야');
  });

  app.get('/noCORS', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.send('pass');
  });

  app.get('/preflight', (req, res) => {
    // res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    // res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Origin', '*');
    res.send('pass');
  });
}