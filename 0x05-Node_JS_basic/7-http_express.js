const app = require('express')();
const countStudents = require('./3-read_file_async');

app.get('/', (req, res) => res.send('Hello Holberton School!'));

app.get('/students', async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
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
    res.write('This is the list of our students\n');
    res.write(`Number of students: ${students.length}\n`);
    res.write(`Number of students in CS: ${cs}. List: ${csList.join(', ')}\n`);
    res.end(`Number of students in SWE: ${swe}. List: ${sweList.join(', ')}`);
  } catch (err) {
    res.setHeader('Status', 500);
    res.write('This is the list of our students\n');
    res.end('Cannot load the database');
  }
});

app.listen(1245, () => console.log('Server running on PORT 1245'));
module.exports = app;
