"use strict";
var assert = require('assert');
var spawnSync = require('child_process').spawnSync;
require('chai').should();

describe('test to check if the arguments are being processed', function(){
  it('should pass a argument on the command line', function(){
    var greet = spawnSync('node', ['greet.js', 'max']);
    var greetString = greet.stdout.toString();
    assert.deepEqual(greetString.slice(0,5), 'hello','did not get value from command line');
  });
  it('should not start with a number', function(){
    var greet = spawnSync('node', ['greet.js', 'foo']);
    var greetString = greet.stdout.toString();
    var notNumber = isNaN(greetString.slice(0,1));
    notNumber.should.equal(true);
  });
});
