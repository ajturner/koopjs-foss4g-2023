const providerYelp = require('@koopjs/provider-yelp');
function initialize() {
  return {
    instance: providerYelp
  };
}
module.exports = initialize;