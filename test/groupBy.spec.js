﻿import 'regenerator-runtime/runtime';
import { groupBy, range } from '../src/index.js';

test('groupBy on list', () => {
  const test = groupBy(range(1, 2));
  expect([...test]).toStrictEqual([
    { key: 1, value: [1] },
    { key: 2, value: [2] },
  ]);
});

test('groupBy on array', () => {
  const test = groupBy([1, 1, 2, 2]);
  expect([...test]).toStrictEqual([
    { key: 1, value: [1, 1] },
    { key: 2, value: [2, 2] },
  ]);
});

test('groupBy on array with grouping', () => {
  const test = groupBy([1, 2, 3, 4, 5, 6], (x) => Math.floor(x / 2));
  expect([...test]).toStrictEqual([
    { key: 0, value: [1] },
    { key: 1, value: [2, 3] },
    { key: 2, value: [4, 5] },
    { key: 3, value: [6] },
  ]);
});

test('groupBy on array with grouping and select', () => {
  const test = groupBy(
    [1, 2, 3, 4, 5, 6],
    (x) => x % 2,
    (x) => x * 100
  );
  expect([...test]).toStrictEqual([
    { key: 1, value: [100, 300, 500] },
    { key: 0, value: [200, 400, 600] },
  ]);
});

// test('groupBy on big list', () => {
//   const test = groupBy(range(0, Number.MAX_SAFE_INTEGER));
//   expect(test.next().value).toBe(0);
// });
