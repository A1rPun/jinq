export function max(generator, select = (v) => v) {
  let max;
  let i = 0;

  for (const value of generator) {
    const v = select(value);
    if (max === undefined || v > max) max = v;
    i++;
  }

  return i ? max : undefined;
}
