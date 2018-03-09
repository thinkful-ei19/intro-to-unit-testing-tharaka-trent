'use strict';

const expect = require('chai').expect;

const fizzbuzzer = require('../fizzBuzzer');


describe('fizzbuzzer tests', function(){
  it('number divisible by 3 and 5 should result with fizz-buzz', function(){
    const normalCases = [
      {a: 15, result: 'fizz-buzz'},
      {a: 30, result: 'fizz-buzz'},
      {a: 45, result: 'fizz-buzz' }
    ];
    normalCases.forEach(test =>{
      const answer = fizzbuzzer(test.a);
      expect(answer).to.equal(test.result);
    });
  });
  it('number divisible by 3 should equal fizz', function(){
    const result = 'fizz';
    expect(fizzbuzzer(3)).to.equal(result);
    expect(fizzbuzzer(6)).to.equal(result);
    expect(fizzbuzzer(9)).to.equal(result);
  });
  it('number divisible by 5 should equal buzz', function(){
    const result = 'buzz';
    expect(fizzbuzzer(5)).to.equal(result);
    expect(fizzbuzzer(10)).to.equal(result);
    expect(fizzbuzzer(20)).to.equal(result);
  });
  it('any other number should return the number', function(){
    expect(fizzbuzzer(1)).to.equal(1);
    expect(fizzbuzzer(4)).to.equal(4);
    expect(fizzbuzzer(7)).to.equal(7);
  });
  it('if input is not a number it should throw an error', function(){
    expect(function(){fizzbuzzer('a');}).to.throw(Error);
    expect(function(){fizzbuzzer(false);}).to.throw(Error);
    expect(function(){fizzbuzzer(null);}).to.throw(Error);
  });
});