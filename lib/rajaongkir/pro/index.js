var request = require('request')
var Promise = require('promise')
var qs = require('querystring')
const axios = require('axios')

function Pro (apiKey) {
  this.version = 'pro'
  this.apiKey = apiKey
  this.httpUri = 'https://rajaongkir.komerce.id/api/v1'
  this.couriers = {
    LION: 'lion',
    JNE: 'jne',
    TIKI: 'tiki',
    POS: 'pos',
    RPX: 'rpx',
    ESL: 'esl',
    PCP: 'pcp',
    PANDU: 'pandu',
    WAHANA: 'wahana',
    SICEPAT: 'sicepat',
    JNT: 'jnt',
    PAHALA: 'pahala',
    CAHAYA: 'cahaya',
    SAP: 'sap',
    JET: 'jet',
    INDAH: 'indah',
    DSE: 'dse',
    SLIS: 'slis',
    FIRST: 'first',
    NCS: 'ncs',
    STAR: 'star',
    EXPEDITO: 'expedito'
  }
  this.instance = axios.create({
    baseURL: this.httpUri,
    timeout: 120000,
    headers: {'content-type': 'application/x-www-form-urlencoded', 'key': apiKey}
  });
}

module.exports = Pro;

Pro.prototype.getCosts = async function (params) {
  return await this.instance.post('/calculate/domestic-cost', qs.stringify(params));
}
