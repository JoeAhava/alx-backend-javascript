export default function getListStudentIds(objs) {
  if (typeof objs !== typeof []) {
    return [];
  }
  const result = objs.map((obj) => obj.id);
  return result.filter((o) => o !== undefined);
}
