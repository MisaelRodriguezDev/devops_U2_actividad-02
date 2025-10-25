//@ts-nocheck
const { sumar, restar, multiplicar, dividir } = require('../src/calculator');

test('suma de 2 + 3 = 5', () => {
  expect(sumar(2, 3)).toBe(5);
});

test('resta de 5 - 2 = 3', () => {
  expect(restar(5, 2)).toBe(3);
});

test('multiplicación de 4 * 2 = 8', () => {
  expect(multiplicar(4, 2)).toBe(8);
});

test('división de 10 / 2 = 5', () => {
  expect(dividir(10, 2)).toBe(5);
});
