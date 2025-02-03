const { Course, Filiere } = require('../models');

// Obtenir tous les cours avec leur filière associée
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll({
      include: [{ model: Filiere, as: 'filiere' }] // Inclure la filière associée
    });
    res.status(200).json(courses);
  } catch (error) {
    console.error('Erreur lors de la récupération des cours:', error);
    res.status(500).json({ error: "Une erreur est survenue lors de la récupération des cours." });
  }
};

// Obtenir un cours par ID avec sa filière associée
exports.getCourseById = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findByPk(id, {
      include: [{ model: Filiere, as: 'filiere' }]
    });
    if (!course) {
      return res.status(404).json({ message: 'Cours non trouvé' });
    }
    res.status(200).json(course);
  } catch (error) {
    console.error('Erreur lors de la récupération du cours:', error);
    res.status(500).json({ error: "Une erreur est survenue lors de la récupération du cours." });
  }
};

// Créer un cours
exports.createCourse = async (req, res) => {
  try {
    const { title, description, teacher_id, academic_year_id, filiere_id } = req.body;

    if (!title || !description || !teacher_id || !academic_year_id || !filiere_id) {
      return res.status(400).json({ message: 'Tous les champs sont requis' });
    }

    // Vérifier si la filière existe
    const filiere = await Filiere.findByPk(filiere_id);
    if (!filiere) {
      return res.status(400).json({ message: 'Filière non trouvée' });
    }

    // Création du cours
    const newCourse = await Course.create({ title, description, teacher_id, academic_year_id, filiere_id });

    res.status(201).json(newCourse);
  } catch (error) {
    console.error('Erreur lors de la création du cours:', error);
    res.status(500).json({ error: "Une erreur est survenue lors de la création du cours." });
  }
};

// Mettre à jour un cours
exports.updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, teacher_id, academic_year_id, filiere_id } = req.body;

    const course = await Course.findByPk(id);
    if (!course) {
      return res.status(404).json({ message: 'Cours non trouvé' });
    }

    // Vérifier si la filière existe
    const filiere = await Filiere.findByPk(filiere_id);
    if (!filiere) {
      return res.status(400).json({ message: 'Filière non trouvée' });
    }

    // Mise à jour du cours
    await course.update({ title, description, teacher_id, academic_year_id, filiere_id });

    res.status(200).json(course);
  } catch (error) {
    console.error('Erreur lors de la mise à jour du cours:', error);
    res.status(500).json({ error: "Une erreur est survenue lors de la mise à jour du cours." });
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

    // Supprime le cours
    await course.destroy();
    res.status(200).json({ message: 'Cours supprimé avec succès' });
  } catch (error) {
    console.error('Erreur lors de la suppression du cours:', error);
    res.status(500).json({ error: "Une erreur est survenue lors de la suppression du cours." });
  }
};
