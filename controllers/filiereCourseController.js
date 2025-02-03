const { FiliereCourse } = require('../models');

// Obtenir tous les filiereCourses
exports.getAllFiliereCourses = async (req, res) => {
  try {
    const filiereCourses = await FiliereCourse.findAll();
    res.status(200).json(filiereCourses);
  } catch (error) {
    console.error('Error fetching FiliereCourses:', error);
    res.status(500).json({ error: error.message });
  }
};

// Obtenir un filiereCourse par ID
exports.getFiliereCourseById = async (req, res) => {
  try {
    const { id } = req.params;
    const filiereCourse = await FiliereCourse.findByPk(id);
    if (!filiereCourse) {
      return res.status(404).json({ message: 'FiliereCourse non trouvé' });
    }
    res.status(200).json(filiereCourse);
  } catch (error) {
    console.error('Error fetching FiliereCourse:', error);
    res.status(500).json({ error: error.message });
  }
};

// Créer un filiereCourse
exports.createFiliereCourse = async (req, res) => {
  try {
    const { academic_year_id, filiere_id, course_id } = req.body;
    if (!academic_year_id || !filiere_id || !course_id) {
      return res.status(400).json({ message: 'Tous les champs sont requis' });
    }
    const newFiliereCourse = await FiliereCourse.create({ academic_year_id, filiere_id, course_id });
    res.status(201).json(newFiliereCourse);
  } catch (error) {
    console.error('Error creating FiliereCourse:', error);
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour un filiereCourse
exports.updateFiliereCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const { academic_year_id, filiere_id, course_id } = req.body;
    const filiereCourse = await FiliereCourse.findByPk(id);
    if (!filiereCourse) {
      return res.status(404).json({ message: 'FiliereCourse non trouvé' });
    }
    await filiereCourse.update({ academic_year_id, filiere_id, course_id });
    res.status(200).json(filiereCourse);
  } catch (error) {
    console.error('Error updating FiliereCourse:', error);
    res.status(500).json({ error: error.message });
  }
};

// Supprimer un filiereCourse
exports.deleteFiliereCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const filiereCourse = await FiliereCourse.findByPk(id);
    if (!filiereCourse) {
      return res.status(404).json({ message: 'FiliereCourse non trouvé' });
    }
    await filiereCourse.destroy();
    res.status(200).json({ message: 'FiliereCourse supprimé avec succès' });
  } catch (error) {
    console.error('Error deleting FiliereCourse:', error);
    res.status(500).json({ error: error.message });
  }
};
