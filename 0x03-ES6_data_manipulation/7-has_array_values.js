export default function hasValuesFromArray(set, arr) {
  const result = arr.filter((el) => !set.has(el));
  return result.length === 0;
}
