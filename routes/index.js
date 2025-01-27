const express = require('express');
const router = express.Router();

// Import des contrôleurs
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const academicYearController = require('../controllers/academicYearController');
const filiereController = require('../controllers/filiereController');
const matiereController = require('../controllers/matiereController');
const courseController = require('../controllers/courseController');
const resourceController = require('../controllers/resourceController');
const assignmentController = require('../controllers/assignmentController');
const gradeController = require('../controllers/gradeController');
const paymentController = require('../controllers/paymentController');
const scheduleController = require('../controllers/scheduleController');
const eventController = require('../controllers/eventController');
const newsController = require('../controllers/newsController');
const questionController = require('../controllers/questionController');
const eventParticipantController = require('../controllers/eventParticipantController');
const professeurMatiereController = require('../controllers/professeurMatiereController');

// Routes pour l'authentification
router.post('/login', authController.login);
router.post('/register', authController.register);

// Routes pour les utilisateurs
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

// Routes pour les années académiques
router.get('/academicYears', academicYearController.getAllAcademicYears);
router.get('/academicYears/:id', academicYearController.getAcademicYearById);
router.post('/academicYears', academicYearController.createAcademicYear);
router.put('/academicYears/:id', academicYearController.updateAcademicYear);
router.delete('/academicYears/:id', academicYearController.deleteAcademicYear);

// Routes pour les filières
router.get('/filieres', filiereController.getAllFilieres);
router.get('/filieres/:id', filiereController.getFiliereById);
router.post('/filieres', filiereController.createFiliere);
router.put('/filieres/:id', filiereController.updateFiliere);
router.delete('/filieres/:id', filiereController.deleteFiliere);

// Routes pour les matières
router.get('/matieres', matiereController.getAllMatieres);
router.get('/matieres/:id', matiereController.getMatiereById);
router.post('/matieres', matiereController.createMatiere);
router.put('/matieres/:id', matiereController.updateMatiere);
router.delete('/matieres/:id', matiereController.deleteMatiere);

// Routes pour les cours
router.get('/courses', courseController.getAllCourses);
router.get('/courses/:id', courseController.getCourseById);
router.post('/courses', courseController.createCourse);
router.put('/courses/:id', courseController.updateCourse);
router.delete('/courses/:id', courseController.deleteCourse);

// Routes pour les ressources
router.get('/resources', resourceController.getAllResources);
router.get('/resources/:id', resourceController.getResourceById);
router.post('/resources', resourceController.createResource);
router.put('/resources/:id', resourceController.updateResource);
router.delete('/resources/:id', resourceController.deleteResource);

// Routes pour les devoirs
router.get('/assignments', assignmentController.getAllAssignments);
router.get('/assignments/:id', assignmentController.getAssignmentById);
router.post('/assignments', assignmentController.createAssignment);
router.post('/assignments/:id/interrogations', assignmentController.createInterrogation);
router.post('/assignments/:id/devoirsFinaux', assignmentController.createDevoirFinal);
router.get('/assignments/:id/notes', assignmentController.getNotes);
router.get('/assignments/:id/finalGrade', assignmentController.calculateFinalGrade);

// Routes pour les notes
router.get('/grades', gradeController.getAllGrades);
router.get('/grades/:id', gradeController.getGradeById);
router.post('/grades', gradeController.createGrade);
router.put('/grades/:id', gradeController.updateGrade);
router.delete('/grades/:id', gradeController.deleteGrade);

// Routes pour les paiements
router.get('/payments', paymentController.getAllPayments);
router.get('/payments/:id', paymentController.getPaymentById);
router.post('/payments', paymentController.createPayment);
router.put('/payments/:id', paymentController.updatePayment);
router.delete('/payments/:id', paymentController.deletePayment);

// Routes pour les horaires
router.get('/schedules', scheduleController.getAllSchedules);
router.get('/schedules/:id', scheduleController.getScheduleById);
router.post('/schedules', scheduleController.createSchedule);
router.put('/schedules/:id', scheduleController.updateSchedule);
router.delete('/schedules/:id', scheduleController.deleteSchedule);

// Routes pour les événements
router.get('/events', eventController.getAllEvents);
router.get('/events/:id', eventController.getEventById);
router.post('/events', eventController.createEvent);
router.put('/events/:id', eventController.updateEvent);
router.delete('/events/:id', eventController.deleteEvent);

// Routes pour les actualités
router.get('/news', newsController.getAllNews);
router.get('/news/:id', newsController.getNewsById);
router.post('/news', newsController.createNews);
router.put('/news/:id', newsController.updateNews);
router.delete('/news/:id', newsController.deleteNews);

// Routes pour les questions
router.get('/questions', questionController.getAllQuestions);
router.get('/questions/:id', questionController.getQuestionById);
router.post('/questions', questionController.createQuestion);
router.put('/questions/:id', questionController.updateQuestion);
router.delete('/questions/:id', questionController.deleteQuestion);

// Routes pour les participations aux événements
router.get('/eventParticipants', eventParticipantController.getAllEventParticipants);
router.get('/eventParticipants/:id', eventParticipantController.getEventParticipantById);
router.post('/eventParticipants', eventParticipantController.createEventParticipant);
router.delete('/eventParticipants/:id', eventParticipantController.deleteEventParticipant);

// Routes pour les associations professeur-matière
router.get('/professeurMatieres', professeurMatiereController.getAllProfesseurMatieres);
router.get('/professeurMatieres/:id', professeurMatiereController.getProfesseurMatiereById);
router.post('/professeurMatieres', professeurMatiereController.createProfesseurMatiere);
router.delete('/professeurMatieres/:id', professeurMatiereController.deleteProfesseurMatiere);

module.exports = router;
