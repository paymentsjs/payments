var $payments= require('./index')
var assert= require('chai').assert

describe('exports', function () {

    it('should export version', function () {
        assert.isString( $payments.version )
    })

    it('should export payment constructor', function () {
        assert.isFunction( $payments.Payment )
    })

    it('should export payment gateway constructor', function () {
        assert.isFunction( $payments.Gateway )
    })

})
