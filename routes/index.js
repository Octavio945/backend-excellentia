const express = require('express');
const router = express.Router();

//routes pour mes middlewares 
const authMiddleware = require('../middlewares/authMiddleware');

// Import des contrôleurs
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const academicYearController = require('../controllers/academicYearController');
const filiereController = require('../controllers/filiereController');
const courseController = require('../controllers/courseController');
const resourceController = require('../controllers/resourceController');
const assignmentController = require('../controllers/assignmentController');
const gradeController = require('../controllers/gradeController');
const paymentController = require('../controllers/paymentController');
const scheduleController = require('../controllers/scheduleController');
const newsController = require('../controllers/newsController');
const questionController = require('../controllers/questionController');
const professeurCourseController = require('../controllers/professeurCourseController');
const filiereCourseController = require('../controllers/filiereCourseController');

// 📌 **Routes pour l'authentification**
router.post('/register', authController.register);
router.post('/login', authController.login);
// router.post('/refresh-token', authController.refreshToken);
router.get("/users/courses", authMiddleware, userController.getCoursesForStudent);
router.get('/student/grades', authMiddleware, gradeController.getGradesForStudent);

// 📌 **Routes pour les utilisateurs**
router.get('/users', userController.getAllUsers);
router.get('/users-by-role', userController.getUsersByRole);
router.get('/user-profile', authMiddleware, userController.getUserProfile);
router.get('/users/:id', userController.getUserById);
router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

// 📌 **Routes pour les années académiques**
router.get('/academicYears', academicYearController.getAllAcademicYears);
router.get('/academicYears/:id', academicYearController.getAcademicYearById);
router.post('/academicYears', academicYearController.createAcademicYear);
router.put('/academicYears/:id', academicYearController.updateAcademicYear);
router.delete('/academicYears/:id', academicYearController.deleteAcademicYear);

// 📌 **Routes pour les filières**
router.get('/filieres', filiereController.getAllFilieres);
router.get('/filieres/:id', filiereController.getFiliereById);
router.get('/filieres/:filiere_id/students', filiereController.getStudentsByFiliere);
router.post('/filieres', filiereController.createFiliere);
router.put('/filieres/:id', filiereController.updateFiliere);
router.delete('/filieres/:id', filiereController.deleteFiliere);

router.get('/filieres/:filiere_id/courses', filiereCourseController.getCoursesByFiliere);

// 📌 **Routes pour les cours**
router.get('/courses', courseController.getAllCourses);
router.get('/courses/:id', courseController.getCourseById);
router.get('/professors/courses', authMiddleware, courseController.getCoursesByTeacher);
router.post('/courses', courseController.createCourse);
router.put('/courses/:id', courseController.updateCourse);
router.delete('/courses/:id', courseController.deleteCourse);

// 📌 **Routes pour les ressources**
router.get('/resources', resourceController.getAllResources);
router.get('/resources/:id', resourceController.getResourceById);
router.post('/resources', resourceController.createResource);
router.put('/resources/:id', resourceController.updateResource);
router.delete('/resources/:id', resourceController.deleteResource);

// 🚀 **🔥 Suppression des routes inutiles liées aux devoirs 🔥**
// ❌ Ces routes sont supprimées car les notes sont gérées par la table `grades`

// 📌 **Routes pour les notes**
router.get('/grades', gradeController.getAllGrades);
router.get('/grades/:id', gradeController.getGradeById);
router.get('/grades/:student_id/:course_id', gradeController.getGradesByStudent);
router.post('/grades', gradeController.createGrade);
router.put('/grades/:id', gradeController.updateGrade);
router.delete('/grades/:id', gradeController.deleteGrade);

// 📌 **Routes pour les paiements**
router.get('/payments', paymentController.getAllPayments);
router.get('/payments/:id', paymentController.getPaymentById);
router.post('/payments', paymentController.createPayment);
router.put('/payments/:id', paymentController.updatePayment);
router.delete('/payments/:id', paymentController.deletePayment);

// 📌 **Routes pour les emplois du temps**
router.get('/schedules', scheduleController.getAllSchedules);
router.get('/schedules/:id', scheduleController.getScheduleById);
router.get('/filieres/:filiere_id/emploi-du-temps', scheduleController.getScheduleByFiliere);
router.get('/schedules/professor', authMiddleware, scheduleController.getScheduleForConnectedProfessor);
router.get('/schedules/student', authMiddleware, scheduleController.getScheduleForConnectedStudent);
// router.get('/test-route', authMiddleware, scheduleController.testRoute);
router.post('/schedules', scheduleController.createSchedule);
router.put('/schedules/:id', scheduleController.updateSchedule);
router.delete('/schedules/:id', scheduleController.deleteSchedule);

// 📌 **Routes pour les actualités**
router.get('/news', newsController.getAllNews);
router.get('/news/:id', newsController.getNewsById);
router.post('/news', newsController.createNews);
router.put('/news/:id', newsController.updateNews);
router.delete('/news/:id', newsController.deleteNews);

// 📌 **Routes pour les questions**
router.get('/questions', questionController.getAllQuestions);
router.get('/questions/:id', questionController.getQuestionById);
router.delete('/questions/:id', questionController.deleteQuestion);

// 📌 **Routes pour les associations professeur-cours**
router.get('/professeurCourses', professeurCourseController.getAllProfesseurCourses);
router.get('/professeurCourses/:id', professeurCourseController.getProfesseurCourseById);
router.post('/professeurCourses', professeurCourseController.createProfesseurCourse);
router.delete('/professeurCourses/:id', professeurCourseController.deleteProfesseurCourse);

// 📌 **Routes pour les associations filière-cours**
router.get('/filiereCourses', filiereCourseController.getAllFiliereCourses);
router.get('/filiereCourses/:id', filiereCourseController.getFiliereCourseById);
router.get('/filiereCourses/filiere/:filiere_id', filiereCourseController.getCoursesByFiliere);
router.get('/courses/:course_id/filieres', filiereCourseController.getFilieresByCourse);
router.post('/filiereCourses', filiereCourseController.createFiliereCourse);
router.put('/filiereCourses/:id', filiereCourseController.updateFiliereCourse);
router.delete('/filiereCourses/:id', filiereCourseController.deleteFiliereCourse);

module.exports = router;
