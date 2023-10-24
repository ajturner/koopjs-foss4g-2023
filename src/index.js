const config = require('config')
const Koop = require('@koopjs/koop-core')
const routes = require('./routes')
const plugins = require('./plugins')
const express = require('express');
const fs = require("fs");
var https = require('https')


// initiate a koop app
const koop = new Koop()

// register koop plugins
plugins.forEach((plugin) => {
  koop.register(plugin.instance, plugin.options)
})

// add additional routes
routes.forEach((route) => {
  route.methods.forEach((method) => {
    koop.server[method](route.path, route.handler)
  })
})

var certOptions = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt')
}

https.createServer( certOptions, koop.server).listen(config.port, () => koop.log.info(`Koop server listening at ${config.port}`))
// koop.server.listen(config.port, () => koop.log.info(`Koop server listening at ${config.port}`))
koop.server.use('/assets', express.static(`${__dirname}/../presentation/assets`));
