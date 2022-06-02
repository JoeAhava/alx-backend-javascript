const router = require('express').Router();
const { default: AppController } = require('../controllers/AppController');
const { default: StudentController } = require('../controllers/StudentController');

router.get('/', AppController.getHomePage);
router.get('/students', StudentController.getAllStudents);
router.get('/students/:major', StudentController.getAllStudentsByMajor);

export default router;
