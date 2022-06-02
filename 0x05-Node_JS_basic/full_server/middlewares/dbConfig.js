export default function (req, res, next) {
  // eslint-disable-next-line prefer-destructuring
  const db = process.argv[2];
  if (!db) {
    res.status(500).end('Cannot load the database');
  }
  req.database = db;
  console.log(process.argv);
  next();
}
