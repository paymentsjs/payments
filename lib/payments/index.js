var Gateway= require('./models/gateway')
var Payment= require('./models/payment')

var pay= require('./middleware/pay')



/**
 * PaymentService constructor.
 *
 * @api public
 */
function PaymentService() {

}

/**
 * Utilize the given `gateway` with optional `name`, overriding
 * the gateway`s default name.
 *
 * Examples:
 *     $payments.use('debug', new Fakekassa(...));
 *
 * @api public
 *
 * @param {String|Gateway} name
 * @param {Gateway} gateway
 *
 * @return {PaymentService} for chaining
 */
PaymentService.prototype.use= function (name, gateway) {
	if (!gateway) {
		gateway= name
		name= gateway.name
	}
	if (!name) {
		throw new Error('payment gateway must have a name')
	}
	this._gateways[name]= gateway
	return this
}

/**
 * Middleware that will provide a payment using the given `gateway` name,
 * with optional `options` and `callback`.
 *
 * Examples:
 *     $payments.pay('debug')
 *
 * @api public
 *
 * @param {String} gateway
 * @param {Object} options
 * @param {Function} callback
 *
 * @return {Function} middleware
 */
PaymentService.prototype.pay= function(gateway, options, callback) {
    var middleware= pay.apply(this, arguments)
    return middleware
}



/**
 * Export default singleton.
 *
 * @api public
 */
module.exports= new PaymentService

/**
 * Export constructors.
 *
 * @api public
 */
module.exports.PaymentService= PaymentService
module.exports.Payment= Payment
module.exports.Gateway= Gateway

/**
 * Export version.
 *
 * @api public
 */
module.exports.version= require('../../package.json').version
