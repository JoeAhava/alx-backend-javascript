export default function getListStudentIds(objs) {
  return objs.length > 0 ? objs.map((obj) => obj.id) : [];
}
