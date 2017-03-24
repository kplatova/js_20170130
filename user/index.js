// modules.export = export = this

var phrases = require('./ru'); // расширение можно не писать

function User(name) {
    this.name = name;
}

User.prototype.hello = function (who) {
    // ...
    console.log(phrases.Hello + ', ' + who.name);
};

// ...

module.exports = User;

