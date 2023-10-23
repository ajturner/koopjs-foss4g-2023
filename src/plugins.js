const providerGithub = require('./provider-github/initialize')();
const outputs = [];
const auths = [];
const caches = [];
const plugins = [providerGithub];
module.exports = [...outputs, ...auths, ...caches, ...plugins];