// var log = require('logger')(module);

module.exports = function (module) {
    
    return function (arguments) {
        var args = [module.filename].concat([].slice.call(arguments));

        console.log.apply(console, args);
    }
}