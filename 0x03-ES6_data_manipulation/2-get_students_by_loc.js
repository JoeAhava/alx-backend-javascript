export default function getStudentsByLocation(objs, city) {
  try {
    return objs.filter((obj) => obj.location === city);
  } catch (err) {
    return [];
  }
}
