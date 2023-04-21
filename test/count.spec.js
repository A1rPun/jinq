﻿import 'regenerator-runtime/runtime';
import { count, longCount, range } from '../src/index.js';

test('count a list', () => {
  const test = count(range(1, 10));
  expect(test).toBe(10);
});

test('count an array', () => {
  const test = count([1, 2, 3, 4, 5]);
  expect(test).toBe(5);
});

test('count with predicate', () => {
  const test = count(range(1, 5), (x) => x > 3);
  expect(test).toBe(2);
});

test('count an empty list', () => {
  const test = count([]);
  expect(test).toBe(0);
});

test('longCount is the same as count', () => {
  const test = longCount([0]);
  expect(test).toBe(count([1]));
});
