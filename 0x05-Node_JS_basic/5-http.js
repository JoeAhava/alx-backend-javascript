const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  switch (req.url) {
    case '/students': {
      res.setHeader('Content-Type', 'text/plain');
      res.write('This is the list of our students\n');
      try {
        const data = await countStudents(process.argv[2]);
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
        res.setHeader('Status', 200);
        res.write(`Number of students: ${students.length}\n`);
        res.write(`Number of students in CS: ${cs}. List: ${csList.join(', ')}\n`);
        res.end(`Number of students in SWE: ${swe}. List: ${sweList.join(', ')}`);
        break;
      } catch (err) {
        res.setHeader('Status', 500);
        res.end('Cannot load the database');
      }

      break;
    }
    default: {
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello Holberton School!'); break;
    }
  }
});

app.listen(1245, () => {});

module.exports = app;
