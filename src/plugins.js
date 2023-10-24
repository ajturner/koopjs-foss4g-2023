const outputOgcapiFeatures = require('./output-ogcapi-features/initialize')();
const providerYelp = require('./provider-yelp/initialize')();
const providerGithub = require('./provider-github/initialize')();
const outputs = [outputOgcapiFeatures];
const auths = [];
const caches = [];
const plugins = [providerGithub, providerYelp];
module.exports = [...outputs, ...auths, ...caches, ...plugins];