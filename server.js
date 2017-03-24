// modules.export = export = this

var User = require('./user');

function run() {
    var vasya = new User('Vasya');
    var petya = new User('Petya');
    var ksuysha = new User('Ksuysha');

    ksuysha.hello(petya);
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}