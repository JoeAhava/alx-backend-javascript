export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const idx of array) {
    // eslint-disable-next-line no-param-reassign
    newArray.push(appendString + idx);
  }

  return newArray;
}
