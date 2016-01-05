var assert = require('assert');
var spawnSync = require('child_process').spawnSync;
var greeting = require('./name');

describe('test to check if the user entered a name to greet', function(){
  it('should pass a name on the command line', function(){
    var greet = spawnSync('node', ['greet.js', 'max']);
    var greetString = greet.stdout.toString();
    assert.deepEqual(greetString.slice(0,5), 'hello','did not get value from command line');
  });
})
