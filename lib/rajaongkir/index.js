var Pro = require('./pro'),
  fs = require('fs')

module.exports = {
  Pro: function (apiKey) {
    if (!apiKey) throw new Error('You must provide RajaOngkir API key')
    return new Pro(apiKey)
  }
}
