// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var is_null = require('../../../../src/php/var/is_null.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/var/is_null.js', function () {
  it('should pass example 1', function (done) {
    is_null('23')
    var expected = false
    var result = is_null('23')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    is_null(null)
    var expected = true
    var result = is_null(null)
    expect(result).to.deep.equal(expected)
    done()
  })
})