const fs = require('fs');

function countStudents(path) {
  try {
    const file = fs.readFileSync(path, { encoding: 'utf-8' });
    const students = file.split('\n');
    students.shift();
    // console.log(students);
    return students.length;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
