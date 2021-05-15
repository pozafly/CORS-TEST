module.exports = app => {
  app.get('/a', (req, res) => {
    res.send('야야야');
  });
}