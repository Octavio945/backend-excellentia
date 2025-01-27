const { Course } = require('../models');

// Obtenir tous les cours
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll();
    res.status(200).json(courses);
  } catch (error) {
    console.error('Error fetching courses:', error);
    res.status(500).json({ error: error.message });
  }
};

// Obtenir un cours par ID
exports.getCourseById = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findByPk(id);
    if (!course) {
      return res.status(404).json({ message: 'Cours non trouvé' });
    }
    res.status(200).json(course);
  } catch (error) {
    console.error('Error fetching course:', error);
    res.status(500).json({ error: error.message });
  }
};

// Créer un cours
exports.createCourse = async (req, res) => {
  try {
    const { title, description, teacher_id, matiere_id, academic_year_id } = req.body;
    if (!title || !description || !teacher_id || !matiere_id || !academic_year_id) {
      return res.status(400).json({ message: 'Tous les champs sont requis' });
    }
    const newCourse = await Course.create({ title, description, teacher_id, matiere_id, academic_year_id });
    res.status(201).json(newCourse);
  } catch (error) {
    console.error('Error creating course:', error);
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour un cours
exports.updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, teacher_id, matiere_id, academic_year_id } = req.body;
    const course = await Course.findByPk(id);
    if (!course) {
      return res.status(404).json({ message: 'Cours non trouvé' });
    }
    await course.update({ title, description, teacher_id, matiere_id, academic_year_id });
    res.status(200).json(course);
  } catch (error) {
    console.error('Error updating course:', error);
    res.status(500).json({ error: error.message });
  }
};

// Supprimer un cours
exports.deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findByPk(id);
    if (!course) {
      return res.status(404).json({ message: 'Cours non trouvé' });
    }
    await course.destroy();
    res.status(200).json({ message: 'Cours supprimé avec succès' });
  } catch (error) {
    console.error('Error deleting course:', error);
    res.status(500).json({ error: error.message });
  }
};
