﻿import 'regenerator-runtime/runtime';
import {
  orderBy,
  orderByDescending,
} from '../src/index.js';

/* OrderBy */
test('orderBy on a list', () => {
  const test = orderBy([2, 1, 3, 5, 4]);
  expect([...test]).toStrictEqual([1, 2, 3, 4, 5]);
});

test('orderBy on a list of objects', () => {
  const test = orderBy(
    [
      { id: 3, name: 'baz' },
      { id: 1, name: 'foo' },
      { id: 2, name: 'bar' },
    ],
    (a, b) => a.id - b.id
  );
  expect([...test]).toStrictEqual([
    { id: 1, name: 'foo' },
    { id: 2, name: 'bar' },
    { id: 3, name: 'baz' },
  ]);
});

/* OrderByDescending */
test('orderByDescending on a list', () => {
  const test = orderByDescending([2, 1, 3, 5, 4]);
  expect([...test]).toStrictEqual([5, 4, 3, 2, 1]);
});

test('orderByDescending on a list of objects', () => {
  const test = orderByDescending(
    [
      { id: 3, name: 'baz' },
      { id: 1, name: 'foo' },
      { id: 2, name: 'bar' },
    ],
    (a, b) => b.id - a.id
  );
  expect([...test]).toStrictEqual([
    { id: 3, name: 'baz' },
    { id: 2, name: 'bar' },
    { id: 1, name: 'foo' },
  ]);
});
