export default function updateStudentGradeByCity(stds, city, newGrades) {
  try {
    const result = stds.filter((std) => std.location === city);
    return result.map((std) => {
      const grade = newGrades.find((n) => n.studentId === std.id);
      //   console.log('grade', grade);
      return ({
        ...std,
        grade: grade ? grade.grade : 'N/A',
      });
    });
  } catch (err) {
    console.log(err);
    return [];
  }
}
