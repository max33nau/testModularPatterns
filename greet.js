var greeting = require('./name.js');

var personName = process.argv[2];

greeting.sayHello(personName);
