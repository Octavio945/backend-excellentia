const { ProfesseurMatiere, User, Matiere } = require('../models');

// Obtenir toutes les associations entre professeurs et matières
exports.getAllProfesseurMatieres = async (req, res) => {
  try {
    const professeurMatieres = await ProfesseurMatiere.findAll({
      include: [
        { model: User, as: 'Professeur' },
        { model: Matiere, as: 'Matiere' }
      ]
    });
    res.status(200).json(professeurMatieres);
  } catch (error) {
    console.error('Error fetching professeur matieres:', error);
    res.status(500).json({ error: error.message });
  }
};

// Obtenir une association entre professeur et matière par ID
exports.getProfesseurMatiereById = async (req, res) => {
  try {
    const { id } = req.params;
    const professeurMatiere = await ProfesseurMatiere.findByPk(id, {
      include: [
        { model: User, as: 'Professeur' },
        { model: Matiere, as: 'Matiere' }
      ]
    });
    if (!professeurMatiere) {
      return res.status(404).json({ message: 'Association professeur-matière non trouvée' });
    }
    res.status(200).json(professeurMatiere);
  } catch (error) {
    console.error('Error fetching professeur matiere:', error);
    res.status(500).json({ error: error.message });
  }
};

// Créer une association entre professeur et matière
exports.createProfesseurMatiere = async (req, res) => {
  try {
    const { professeur_id, matiere_id } = req.body;
    if (!professeur_id || !matiere_id) {
      return res.status(400).json({ message: 'Tous les champs sont requis' });
    }
    const newProfesseurMatiere = await ProfesseurMatiere.create({ professeur_id, matiere_id });
    res.status(201).json(newProfesseurMatiere);
  } catch (error) {
    console.error('Error creating professeur matiere:', error);
    res.status(500).json({ error: error.message });
  }
};

// Supprimer une association entre professeur et matière
exports.deleteProfesseurMatiere = async (req, res) => {
  try {
    const { id } = req.params;
    const professeurMatiere = await ProfesseurMatiere.findByPk(id);
    if (!professeurMatiere) {
      return res.status(404).json({ message: 'Association professeur-matière non trouvée' });
    }
    await professeurMatiere.destroy();
    res.status(200).json({ message: 'Association professeur-matière supprimée avec succès' });
  } catch (error) {
    console.error('Error deleting professeur matiere:', error);
    res.status(500).json({ error: error.message });
  }
};
