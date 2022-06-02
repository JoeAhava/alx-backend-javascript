import router from './routes';

const app = require('express')();

app.use(router);
app.listen(1245, () => console.log('Server running on 1245'));
export default app;
