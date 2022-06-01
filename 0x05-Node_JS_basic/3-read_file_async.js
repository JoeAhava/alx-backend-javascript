const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        // console.error(err);
        reject(err);
      }
      let students = data.split('\n');
      let cs = 0;
      let swe = 0;
      const csList = [];
      const sweList = [];
      students.shift();
      students = students.filter((s) => typeof s !== 'undefined' && s.length > 0 && s !== null);
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
      process.stdout.write(`Number of students: ${students.length}\n`);
      process.stdout.write(`Number of students in CS: ${cs}. List: ${csList.join(', ')}\n`);
      process.stdout.write(`Number of students in SWE: ${swe}. List: ${sweList.join(', ')}\n`);
      resolve(data);
    });
  });
}

module.exports = countStudents;
