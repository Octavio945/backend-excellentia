const { Matiere } = require('../models');

// Obtenir toutes les matières
exports.getAllMatieres = async (req, res) => {
  try {
    const matieres = await Matiere.findAll();
    res.status(200).json(matieres);
  } catch (error) {
    console.error('Error fetching matieres:', error);
    res.status(500).json({ error: error.message });
  }
};

// Obtenir une matière par ID
exports.getMatiereById = async (req, res) => {
  try {
    const { id } = req.params;
    const matiere = await Matiere.findByPk(id);
    if (!matiere) {
      return res.status(404).json({ message: 'Matière non trouvée' });
    }
    res.status(200).json(matiere);
  } catch (error) {
    console.error('Error fetching matiere:', error);
    res.status(500).json({ error: error.message });
  }
};

// Créer une matière
exports.createMatiere = async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name || !description) {
      return res.status(400).json({ message: 'Tous les champs sont requis' });
    }
    const newMatiere = await Matiere.create({ name, description });
    res.status(201).json(newMatiere);
  } catch (error) {
    console.error('Error creating matiere:', error);
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour une matière
exports.updateMatiere = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const matiere = await Matiere.findByPk(id);
    if (!matiere) {
      return res.status(404).json({ message: 'Matière non trouvée' });
    }
    await matiere.update({ name, description });
    res.status(200).json(matiere);
  } catch (error) {
    console.error('Error updating matiere:', error);
    res.status(500).json({ error: error.message });
  }
};

// Supprimer une matière
exports.deleteMatiere = async (req, res) => {
  try {
    const { id } = req.params;
    const matiere = await Matiere.findByPk(id);
    if (!matiere) {
      return res.status(404).json({ message: 'Matière non trouvée' });
    }
    await matiere.destroy();
    res.status(200).json({ message: 'Matière supprimée avec succès' });
  } catch (error) {
    console.error('Error deleting matiere:', error);
    res.status(500).json({ error: error.message });
  }
};
