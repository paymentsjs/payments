module.exports= function pay(gateway, options, callback) {
    if (!callback && typeof options === 'function') {
        callback= options
        options= {}
    } else {
        options= options || {}
    }
    return function pay(req, res, next) {
        var payment= this
    }.bind(this)
}
