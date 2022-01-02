export function min(generator, select = (v) => v) {
  let min;
  let i = 0;

  for (const value of generator) {
    const v = select(value);
    if (min === undefined || v < min) min = v;
    i++;
  }

  return i ? min : undefined;
}
