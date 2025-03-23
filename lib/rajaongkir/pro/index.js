var request = require('request')
var Promise = require('promise')
var qs = require('querystring')
const axios = require('axios')

function Pro (apiKey) {
  this.version = 'pro'
  this.apiKey = apiKey
  this.httpUri = 'http://' + this.version + '.rajaongkir.com/api'
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
    headers: {'content-type': 'application/json', 'key': apiKey}
  });
}

module.exports = Pro

Pro.prototype.getProvinces = async function () {
  var uri = '/province'
  var instance = this.instance
  return await instance.get(uri);
}

Pro.prototype.getProvince = async function (id) {
  var uri = '/province?id=' + id
  var instance = this.instance
  return await instance.get(uri);
}

Pro.prototype.getCities = async function () {
  var uri = '/city'
  var apiKey = this.apiKey
  var instance = this.instance
  return await instance.get(uri,);
}

Pro.prototype.getCity = async function (id) {
  var uri = '/city?id=' + id
  var instance = this.instance
  return await instance.get(uri);
}

Pro.prototype.getSubDistrict = async function (params) {
  var uri = '/subdistrict?' + qs.stringify(params)
  var instance = this.instance
  return await instance.get(uri);
}

Pro.prototype.getCosts = async function (params) {
  return await this.instance.post('/cost', params);
}

Pro.prototype.getLIONCost = async function (params) {
  params.courier = this.couriers.LION
  return await this.instance.post('/cost', params);
}

Pro.prototype.getJNECost = async function (params) {
  params.courier = this.couriers.JNE
  return await this.instance.post('/cost', params);
}

Pro.prototype.getTIKICost = async function (params) {
  params.courier = this.couriers.TIKI
  return await this.instance.post('/cost', params);
}

Pro.prototype.getPOSCost = async function (params) {
  params.courier = this.couriers.POS
  return await this.instance.post('/cost', params);
}

Pro.prototype.getRPXCost = async function (params) {
  params.courier = this.couriers.RPX
  return await this.instance.post('/cost', params);
}

Pro.prototype.getESLCost = async function (params) {
  params.courier = this.couriers.ESL
  return await this.instance.post('/cost', params);
}

Pro.prototype.getPCPCost = async function (params) {
  params.courier = this.couriers.PCP
  return await this.instance.post('/cost', params);
}

Pro.prototype.getPanduCost = async function (params) {
  params.courier = this.couriers.PANDU
  return await this.instance.post('/cost', params);
}

Pro.prototype.getWahanaCost = async function (params) {
  params.courier = this.couriers.WAHANA
  return await this.instance.post('/cost', params);
}

Pro.prototype.getSiCepatCost = async function (params) {
  params.courier = this.couriers.SICEPAT
  return await this.instance.post('/cost', params);
}

Pro.prototype.getPahalaCost = async function (params) {
  params.courier = this.couriers.PAHALA
  return await this.instance.post('/cost', params);
}

Pro.prototype.getCahayaCost = async function (params) {
  params.courier = this.couriers.CAHAYA
  return await this.instance.post('/cost', params);
}

Pro.prototype.getSAPCost = async function (params) {
  params.courier = this.couriers.SAP
  return await this.instance.post('/cost', params);
}

Pro.prototype.getJETCost = async function (params) {
  params.courier = this.couriers.JET
  return await this.instance.post('/cost', params);
}

Pro.prototype.getIndahCost = async function (params) {
  params.courier = this.couriers.INDAH
  return await this.instance.post('/cost', params);
}

Pro.prototype.getDSECost = async function (params) {
  params.courier = this.couriers.DSE
  return await this.instance.post('/cost', params);
}

Pro.prototype.getSLISCost = async function (params) {
  params.courier = this.couriers.SLIS
  return await this.instance.post('/cost', params);
}

Pro.prototype.getFirstCost = async function (params) {
  params.courier = this.couriers.FIRST
  return await this.instance.post('/cost', params);
}

Pro.prototype.getNCSCost = async function (params) {
  params.courier = this.couriers.NCS
  return await this.instance.post('/cost', params);
}

Pro.prototype.getStarCost = async function (params) {
  params.courier = this.couriers.STAR
  return await this.instance.post('/cost', params);
}

Pro.prototype.getInterOrigins = async function () {
  var uri = '/v2/internationalOrigin'
  return await this.instance.get(uri);
}

Pro.prototype.getInterOrigin = async function (params) {
  var uri = this.httpUri + '/v2/internationalOrigin?' + qs.stringify(params)
  return await this.instance.get(uri);
}

Pro.prototype.getInterDests = async function () {
  var uri = this.httpUri + '/v2/internationalDestination'
  return await this.instance.get(uri);
}

Pro.prototype.getInterDest = async function (id) {
  var uri = this.httpUri + '/v2/internationalDestination?id=' + id
  return await this.instance.get(uri);
}

Pro.prototype.getTIKIInterConst = async function (params) {
  var uri = this.httpUri + '/v2/internationalCost'
  params.courier = this.couriers.TIKI
  return await this.instance.post(uri, params);
}

Pro.prototype.getPOSInterCost = async function (params) {
  var uri = this.httpUri + '/v2/internationalCost'
  params.courier = this.couriers.POS
  return await this.instance.post(uri, params);
}

Pro.prototype.getJNEInterCost = async function (params) {
  var uri = this.httpUri + '/v2/internationalCost'
  params.courier = this.couriers.JNE
  return await this.instance.post(uri, params);
}

Pro.prototype.getSLISInterCost = async function (params) {
  var uri = this.httpUri + '/v2/internationalCost'
  params.courier = this.couriers.SLIS
  return await this.instance.post(uri, params);
}

Pro.prototype.getExpeditoInterCost = async function (params) {
  var uri = this.httpUri + '/v2/internationalCost'
  params.courier = this.couriers.EXPEDITO
  return await this.instance.post(uri, params);
}

Pro.prototype.getCurrency = async function () {
  var uri = this.httpUri + '/currency'
  return await this.instance.get(uri);
}

Pro.prototype.getJNEWaybill = async function (params) {
  var uri = this.httpUri + '/waybill'
  params.courier = this.couriers.JNE
  return await this.instance.post(uri, params);
}

Pro.prototype.getPOSWaybill = async function (params) {
  var uri = this.httpUri + '/waybill'
  params.courier = this.couriers.POS
  return await this.instance.post(uri, params);
}

Pro.prototype.getTIKIWaybill = async function (params) {
  var uri = this.httpUri + '/waybill'
  params.courier = this.couriers.TIKI
  return await this.instance.post(uri, params);
}

Pro.prototype.getWahanaWaybill = async function (params) {
  var uri = this.httpUri + '/waybill'
  params.courier = this.couriers.WAHANA
  return await this.instance.post(uri, params);
}

Pro.prototype.getJNTWaybill = async function (params) {
  var uri = this.httpUri + '/waybill'
  params.courier = this.couriers.JNT
  return await this.instance.post(uri, params);
}

Pro.prototype.getRPXWaybill = async function (params) {
  var uri = this.httpUri + '/waybill'
  params.courier = this.couriers.RPX
  return await this.instance.post(uri, params);
}

Pro.prototype.getSAPWaybill = async function (params) {
  var uri = this.httpUri + '/waybill'
  params.courier = this.couriers.SAP
  return await this.instance.post(uri, params);
}

Pro.prototype.getSiCepatWaybill = async function (params) {
  var uri = this.httpUri + '/waybill'
  params.courier = this.couriers.SICEPAT
  return await this.instance.post(uri, params);
}

Pro.prototype.getPCPWaybill = async function (params) {
  var uri = this.httpUri + '/waybill'
  params.courier = this.couriers.PCP
  return await this.instance.post(uri, params);
}

Pro.prototype.getJETWaybill = async function (params) {
  var uri = this.httpUri + '/waybill'
  params.courier = this.couriers.JET
  return await this.instance.post(uri, params);
}

Pro.prototype.getDSEWaybill = async function (params) {
  var uri = this.httpUri + '/waybill'
  params.courier = this.couriers.DSE
  return await this.instance.post(uri, params);
}

Pro.prototype.getFirstWaybill = async function (params) {
  var uri = this.httpUri + '/waybill'
  params.courier = this.couriers.FIRST
  return await this.instance.post(uri, params);
}
