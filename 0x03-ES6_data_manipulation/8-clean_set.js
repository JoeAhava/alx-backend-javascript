export default function cleanSet(set, startString) {
  if (typeof set !== typeof new Set()) {
    return '';
  }
  try {
    const results = [];
    if (startString.length > 0) {
      set.forEach((value) => {
        if (value.startsWith(startString, 0)) {
          console.log(value.slice(startString.length));
          results.push(value.slice(startString.length));
        }
      });
    }
    return results.join('-');
  } catch (err) { return ''; }
}
