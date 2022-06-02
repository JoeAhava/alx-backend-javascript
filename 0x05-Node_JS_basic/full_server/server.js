import router from './routes';

const app = require('express')();

// app.use((req, res, next) => {
//   try {
//     // eslint-disable-next-line prefer-destructuring
//     req.database = process.argv[2];
//   } catch (err) {
//     res.status(500).end('Cannot load the database');
//   }
//   next();
// });
app.use(router);
app.listen(1245, () => console.log('Server running on 1245'));
export default app;
