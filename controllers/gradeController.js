const { Grade } = require('../models');

// Obtenir toutes les notes
exports.getAllGrades = async (req, res) => {
  try {
    const grades = await Grade.findAll();
    res.status(200).json(grades);
  } catch (error) {
    console.error('Error fetching grades:', error);
    res.status(500).json({ error: error.message });
  }
};

// Obtenir une note par ID
exports.getGradeById = async (req, res) => {
  try {
    const { id } = req.params;
    const grade = await Grade.findByPk(id);
    if (!grade) {
      return res.status(404).json({ message: 'Note non trouvée' });
    }
    res.status(200).json(grade);
  } catch (error) {
    console.error('Error fetching grade:', error);
    res.status(500).json({ error: error.message });
  }
};

// Créer une note
exports.createGrade = async (req, res) => {
  try {
    const { student_id, course_id, grade_type, grade } = req.body;
    if (!student_id || !course_id || !grade_type || grade === undefined) {
      return res.status(400).json({ message: 'Tous les champs sont requis' });
    }
    const newGrade = await Grade.create({ student_id, course_id, grade_type, grade });
    res.status(201).json(newGrade);
  } catch (error) {
    console.error('Error creating grade:', error);
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour une note
exports.updateGrade = async (req, res) => {
  try {
    const { id } = req.params;
    const { grade_type, grade } = req.body;
    const gradeRecord = await Grade.findByPk(id);
    if (!gradeRecord) {
      return res.status(404).json({ message: 'Note non trouvée' });
    }
    await gradeRecord.update({ grade_type, grade });
    res.status(200).json(gradeRecord);
  } catch (error) {
    console.error('Error updating grade:', error);
    res.status(500).json({ error: error.message });
  }
};

// Supprimer une note
exports.deleteGrade = async (req, res) => {
  try {
    const { id } = req.params;
    const grade = await Grade.findByPk(id);
    if (!grade) {
      return res.status(404).json({ message: 'Note non trouvée' });
    }
    await grade.destroy();
    res.status(200).json({ message: 'Note supprimée avec succès' });
  } catch (error) {
    console.error('Error deleting grade:', error);
    res.status(500).json({ error: error.message });
  }
};
