var greeting = {
  sayHello: function(name) {
    if (isNaN(name)) {
      return console.log('hello ' + name);
    } else if (isNaN(name) == false) {
      return console.log(name + ' is not a valid input');
    } else {
      return console.log('please try again');
    }
  }
}

module.exports = greeting;
