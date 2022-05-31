const fs = require('fs');

function countStudents(path) {
  try {
    const file = fs.readFileSync(path, { encoding: 'utf-8' });
    let students = file.split('\n');
    students.shift();
    students = students.map((student) => student.split(','));
    // console.log(students);
    const fields = students.map((std) => std[3]);
    const fieldData = {};
    // console.log(fields);
    fields.forEach((value) => {
      if (fieldData[value]) {
        fieldData[value] += 1;
      } else {
        fieldData[value] = 1;
      }
    //   console.log(fieldData);
    });
    const fieldDataStd = Object(fieldData);
    students.forEach((value) => {
      if (fieldDataStd[value[3]].length > 0) {
        fieldDataStd[value[3]].push(value[0]);
      } else {
        fieldDataStd[value[3]] = [value[0]];
      }
    //   console.log(fieldDataStd);
    });
    process.stdout.write(`Number of students: ${students.length}
Number of students in CS: ${fieldData.CS.length}. List: ${fieldData.CS}
Number of students in SWE: ${fieldData.SWE.length}. List: ${fieldData.SWE}\n`);
  } catch (err) {
    console.log(err);
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
