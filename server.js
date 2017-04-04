// modules.export = export = this
var db = require('db');
var http = require('http');
var server = new http.Server();
var User = require('./user');

db.connect();
server.listen(1337, '127.0.0.1');

function run() {
    var petya = new User('Petya');
    var ksuysha = new User('Ksuysha');

    ksuysha.hello(petya);
    console.log(db.getPhrase('Run successful'))
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}

var counter = 0;

server.on('request', function (req, res) {
    res.end('Hello wold!' + ++counter);
})