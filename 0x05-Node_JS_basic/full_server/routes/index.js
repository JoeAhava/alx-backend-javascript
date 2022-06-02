import dbConfig from '../middlewares/dbConfig';

const router = require('express').Router();
const { default: AppController } = require('../controllers/AppController');
const { default: StudentController } = require('../controllers/StudentController');

router.get('/', AppController.getHomePage);
router.get('/students', dbConfig, StudentController.getAllStudents);
router.get('/students/:major', dbConfig, StudentController.getAllStudentsByMajor);

export default router;
