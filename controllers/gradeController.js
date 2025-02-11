const { Grade } = require('../models');

// Définir les types de notes autorisés
const VALID_GRADE_TYPES = ['interrogation1', 'interrogation2', 'devoir_terminal'];

// Fonction pour gérer les erreurs
const handleError = (res, error, message = 'Erreur serveur') => {
  console.error(message, error);
  res.status(500).json({ error: message });
};

// 📌 **Obtenir toutes les notes**
exports.getAllGrades = async (req, res) => {
  try {
    const grades = await Grade.findAll();
    res.status(200).json(grades);
  } catch (error) {
    handleError(res, error, 'Erreur lors de la récupération des notes');
  }
};

// 📌 **Obtenir une note par ID**
exports.getGradeById = async (req, res) => {
  try {
    const { id } = req.params;
    const grade = await Grade.findByPk(id);
    if (!grade) {
      return res.status(404).json({ message: 'Note non trouvée' });
    }
    res.status(200).json(grade);
  } catch (error) {
    handleError(res, error, 'Erreur lors de la récupération de la note');
  }
};

// 📌 **Créer une nouvelle note**
exports.createGrade = async (req, res) => {
  try {
    const { student_id, course_id, grade_type, grade } = req.body;

    // Vérifier si tous les champs sont présents
    if (!student_id || !course_id || !grade_type || grade === undefined) {
      return res.status(400).json({ message: 'Tous les champs sont requis' });
    }

    // Vérifier si le type de note est valide
    if (!VALID_GRADE_TYPES.includes(grade_type)) {
      return res.status(400).json({ message: 'Type de note invalide' });
    }

    // Vérifier si une note du même type existe déjà pour l'étudiant et le cours
    const existingGrade = await Grade.findOne({
      where: { student_id, course_id, grade_type },
    });

    if (existingGrade) {
      return res.status(400).json({ message: `L'étudiant a déjà une note pour ${grade_type} dans ce cours` });
    }

    // Créer la note
    const newGrade = await Grade.create({ student_id, course_id, grade_type, grade });

    res.status(201).json({ message: 'Note ajoutée avec succès', grade: newGrade });
  } catch (error) {
    handleError(res, error, 'Erreur lors de la création de la note');
  }
};

// 📌 **Mettre à jour une note**
exports.updateGrade = async (req, res) => {
  try {
    const { id } = req.params;
    const { grade } = req.body;

    // Vérifier si la note existe
    const gradeRecord = await Grade.findByPk(id);
    if (!gradeRecord) {
      return res.status(404).json({ message: 'Note non trouvée' });
    }

    // Mettre à jour la note
    await gradeRecord.update({ grade });

    res.status(200).json({ message: 'Note mise à jour avec succès', grade: gradeRecord });
  } catch (error) {
    handleError(res, error, 'Erreur lors de la mise à jour de la note');
  }
};

// 📌 **Supprimer une note**
exports.deleteGrade = async (req, res) => {
  try {
    const { id } = req.params;

    // Vérifier si la note existe
    const grade = await Grade.findByPk(id);
    if (!grade) {
      return res.status(404).json({ message: 'Note non trouvée' });
    }

    // Supprimer la note
    await grade.destroy();

    res.status(200).json({ message: 'Note supprimée avec succès' });
  } catch (error) {
    handleError(res, error, 'Erreur lors de la suppression de la note');
  }
};
