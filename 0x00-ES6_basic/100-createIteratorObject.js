export default function createIteratorObject(report) {
  const arr = [];
  // eslint-disable-next-line no-unused-vars
  for (const [dep, emp] of Object.entries(report.allEmployees)) {
    for (const e of emp) {
      arr.push(e);
    }
  }
  return arr;
}
