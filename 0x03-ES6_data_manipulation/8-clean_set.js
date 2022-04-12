export default function cleanSet(set, startString) {
  const results = [];
  if (startString.length === 0) {
    return '';
  }
  set.forEach((value) => {
    if (value.startsWith(startString, 0)) {
      results.push(value.slice(startString.length, -1));
    }
  });
  return results.join('-');
}
