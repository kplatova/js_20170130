// modules.export = export = this
// расширение можно не писать
// тк сначала ищет db/index.js, потом db.js, потом db.json

var db = require('db');
// паттер модуль-фабрика module - пареметры
var log = require('logger')(module);

function User(name) {
    this.name = name;
}

User.prototype.hello = function (who) {
    // ...
    console.log(db.getPhrase('Hello') + ', ' + who.name);
};

// ...

module.exports = User;

