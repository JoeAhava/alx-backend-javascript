export default function cleanSet(set, startString) {
  try {
    const results = [];
    if (startString.length > 0) {
      for (const value of set) {
        if (value && value.startsWith(startString, 0)) {
          results.push(value.slice(startString.length));
        }
      }
    }
    return results.join('-');
  } catch (err) { return ''; }
}
