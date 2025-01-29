const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Question = sequelize.define('Question', {
  visitor_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  visitor_email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  question: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  response: {  // Champ pour la réponse de l'admin
    type: DataTypes.TEXT, // La réponse peut être un texte long
    allowNull: true, // L'admin peut répondre à tout moment, donc ce champ est optionnel
    defaultValue: null // Par défaut, la réponse est vide
  }
}, {
  timestamps: true // Garde les timestamps createdAt et updatedAt
});

module.exports = Question;
