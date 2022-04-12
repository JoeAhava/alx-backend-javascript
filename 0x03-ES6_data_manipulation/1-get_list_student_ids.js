export default function getListStudentIds(objs) {
  try {
    return objs.map((obj) => obj.id);
  } catch (err) {
    return [];
  }
}
