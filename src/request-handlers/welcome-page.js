function handleRequest (req, res) {
  // res.status(200).send('Welcome to Koop!')
  res.sendFile('index.html', {root: __dirname })
}

module.exports = handleRequest
