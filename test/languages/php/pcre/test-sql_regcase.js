// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var sql_regcase = require('../../../../src/php/pcre/sql_regcase.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/pcre/sql_regcase.js', function () {
  it('should pass example 1', function (done) {
    sql_regcase('Foo - bar.')
    var expected = '[Ff][Oo][Oo] - [Bb][Aa][Rr].'
    var result = sql_regcase('Foo - bar.')
    expect(result).to.deep.equal(expected)
    done()
  })
})