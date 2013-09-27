/**
 * Gateway constructor.
 *
 * @api public
 */
var Gateway= module.exports= function Gateway() {

}

/**
 * Pay.
 *
 * This function must be overridden by subclasses. In abstract form, it always
 * throws an exception.
 *
 * @param {Object} req
 * @param {Object} options
 * @api protected
 */
Gateway.prototype.pay= function (req, options) {
	throw new Error('Gateway#pay must be overridden by subclass')
}
