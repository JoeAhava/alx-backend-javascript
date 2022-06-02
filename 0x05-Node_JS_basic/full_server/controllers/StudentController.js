import readDatabase from '../utils';

export default class StudentController {
  static async getAllStudents(req, res) {
    try {
      const data = await readDatabase('database.csv');
      let students = 0;
      for (const d in data) {
        if (d) {
          students += d.length;
        }
      }
      res.write('This is the list of our students\n');
      res.write(`Number of students: ${students}\n`);
      res.write(`Number of students in CS: ${data.CS.length}. List: ${data.CS.join(', ')}\n`);
      res.end(`Number of students in SWE: ${data.SWE.length}. List: ${data.SWE.join(', ')}`);
    } catch (err) {
      res.status(500).end(err.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    if (!(req.params.major === 'CS' || req.params.major === 'SWE')) {
      res.status(500).end('Major parameter must be CS or SWE');
    }
    try {
      const data = await readDatabase('database.csv');
      res.status(200).end(`List: ${data[req.params.major].join(', ')}`);
    } catch (err) {
      // console.error(err);
      res.status(500).end(err.toString());
    }
  }
}
