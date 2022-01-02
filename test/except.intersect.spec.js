﻿import 'regenerator-runtime/runtime';
import { except, intersect, range } from '../index.js';

/* Except */
test('except on a list', () => {
  const test = except(range(1, 5), range(3, 8));
  expect([...test]).toStrictEqual([1, 2]);
});

/* Intersect */
test('intersect on a list', () => {
  const test = intersect(range(1, 5), range(3, 8));
  expect([...test]).toStrictEqual([3, 4, 5]);
});
