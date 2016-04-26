// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var deg2rad = require('../../../../src/php/math/deg2rad.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/math/deg2rad.js', function () {
  it('should pass example 1', function (done) {
    deg2rad(45)
    var expected = 0.7853981633974483
    var result = deg2rad(45)
    expect(result).to.deep.equal(expected)
    done()
  })
})