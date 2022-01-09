export function single(iterator, predicate = () => true) {
  let single = undefined;

  for (const value of iterator)
    if (predicate(value))
      if (single !== undefined) return undefined;
      else single = value;

  return single;
}
