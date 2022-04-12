export default function getListStudentIds(objs) {
  return typeof objs === typeof [] ? objs.map((obj) => obj.id) : [];
}
