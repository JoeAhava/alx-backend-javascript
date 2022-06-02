const fs = require('fs');

export default function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
        reject(new Error('Cannot load the database'));
        return;
      }
      let students = data.split('\n');
      const csList = [];
      const sweList = [];
      students.shift();
      students = students.filter((s) => typeof s !== 'undefined' && s.length > 0 && s !== null);
      students.forEach((student) => {
        const temp = student.split(',');
        switch (temp[3]) {
          case 'CS': {
            csList.push(temp[0]);
            break;
          }
          case 'SWE': {
            sweList.push(temp[0]);
            break;
          }
          default: break;
        }
      });
      resolve({ CS: csList, SWE: sweList });
    });
  });
}
