const sum = require('./sum.js');

test('soma dois valores', () => {
  expect(sum(4, 5)).toBe(9);
});

test('soma dois valores', () => {
  expect(sum(0, 0)).toBe(0);
});

test('soma com string', () => {
  expect(() => { sum(4, "5") }).toThrowError();
});

test('soma com string', () => {
  expect(() => { sum(4, "5") }).toThrowError('parameters must be numbers');
});