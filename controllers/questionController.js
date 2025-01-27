const { Question } = require('../models');

// Obtenir toutes les questions
exports.getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.findAll();
    res.status(200).json(questions);
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).json({ error: error.message });
  }
};

// Obtenir une question par ID
exports.getQuestionById = async (req, res) => {
  try {
    const { id } = req.params;
    const question = await Question.findByPk(id);
    if (!question) {
      return res.status(404).json({ message: 'Question non trouvée' });
    }
    res.status(200).json(question);
  } catch (error) {
    console.error('Error fetching question:', error);
    res.status(500).json({ error: error.message });
  }
};

// Créer une question
exports.createQuestion = async (req, res) => {
  try {
    const { visitor_name, visitor_email, question } = req.body;
    if (!visitor_name || !visitor_email || !question) {
      return res.status(400).json({ message: 'Tous les champs sont requis' });
    }
    const newQuestion = await Question.create({ visitor_name, visitor_email, question });
    res.status(201).json(newQuestion);
  } catch (error) {
    console.error('Error creating question:', error);
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour une question
exports.updateQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const { visitor_name, visitor_email, question } = req.body;
    const questionRecord = await Question.findByPk(id);
    if (!questionRecord) {
      return res.status(404).json({ message: 'Question non trouvée' });
    }
    await questionRecord.update({ visitor_name, visitor_email, question });
    res.status(200).json(questionRecord);
  } catch (error) {
    console.error('Error updating question:', error);
    res.status(500).json({ error: error.message });
  }
};

// Supprimer une question
exports.deleteQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const question = await Question.findByPk(id);
    if (!question) {
      return res.status(404).json({ message: 'Question non trouvée' });
    }
    await question.destroy();
    res.status(200).json({ message: 'Question supprimée avec succès' });
  } catch (error) {
    console.error('Error deleting question:', error);
    res.status(500).json({ error: error.message });
  }
};
