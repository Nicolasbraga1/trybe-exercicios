const myFizzBuzz = require('./myFizzBuzz.js');

it ('fizzbuzz', () =>{
 expect (myFizzBuzz(30)).toBe('fizzbuzz');
});

it ('fizz', () =>{
 expect (myFizzBuzz(9)).toBe('fizz');
});

it ('buzz', () =>{
 expect (myFizzBuzz(10)).toBe('buzz');
});

it ('numero', () =>{
 expect (myFizzBuzz(2)).toBe(2);
});
it ('false', () =>{
  expect (myFizzBuzz('u')).toBe(false);
});