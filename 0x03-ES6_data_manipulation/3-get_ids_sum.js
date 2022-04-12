import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdsSum(objs) {
  try {
    return getListStudentIds(objs).reduce((prev, current) => prev + current, 0);
  } catch (err) {
    return [];
  }
}
