var greeting = {
  sayHello: function(name) {
    if (name) {
      return console.log('hello ' + name);
    } else {
      return console.log('a valid name was not entered');
    }
  }
}

module.exports = greeting;
