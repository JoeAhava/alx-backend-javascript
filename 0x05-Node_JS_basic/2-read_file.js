const fs = require('fs');

function countStudents(path) {
  try {
    const file = fs.readFileSync(path, { encoding: 'utf-8' });
    const students = file.split('\n');
    let cs = 0;
    let swe = 0;
    const csList = [];
    const sweList = [];
    students.shift();
    students.forEach((student) => {
      const temp = student.split(',');
      switch (temp[3]) {
        case 'CS': {
          cs += 1;
          csList.push(temp[0]);
          break;
        }
        case 'SWE': {
          swe += 1;
          sweList.push(temp[0]);
          break;
        }
        default: break;
      }
    });

    console.log(`Number of students: ${students.length}`);
    console.log(`Number of students in CS: ${cs}. List: ${csList.join(', ')}`);
    console.log(`Number of students in SWE: ${swe}. List: ${sweList.join(', ')}`);

    // process.stdout.write(`Number of students: ${students.length}\n`);
    // process.stdout.write(`Number of students in CS: ${cs}. List: ${csList.join(', ')}\n`);
    // process.stdout.write(`Number of students in SWE: ${swe}. List: ${sweList.join(', ')}\n`);
  } catch (err) {
    console.log(err);
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
