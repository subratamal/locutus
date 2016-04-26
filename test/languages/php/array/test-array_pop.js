// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var array_pop = require('../../../../src/php/array/array_pop.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/array/array_pop.js', function () {
  it('should pass example 1', function (done) {
    array_pop([0,1,2])
    var expected = 2
    var result = array_pop([0,1,2])
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var $data = {firstName: 'Kevin', surName: 'van Zonneveld'}
    var $lastElem = array_pop($data)
    var $result = $data
    var expected = {firstName: 'Kevin'}
    var $data = {firstName: 'Kevin', surName: 'van Zonneveld'}
    var $lastElem = array_pop($data)
    var result = $data
    expect(result).to.deep.equal(expected)
    done()
  })
})