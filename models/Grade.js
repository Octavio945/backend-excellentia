const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');
const Course = require('./Course');

const Grade = sequelize.define('Grade', {
  grade_type: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [['devoir', 'interrogation', 'examen']], // Validation des types de notes
    },
  },
  grade: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: 0, // La note ne peut pas être inférieure à 0
      max: 20, // La note ne peut pas être supérieure à 20
    },
  },
  category: {
    type: DataTypes.ENUM('devoir', 'interrogation', 'examen'),
    allowNull: false,
  },
  weight: {
    type: DataTypes.FLOAT,
    allowNull: true, // Ce champ est optionnel, car toutes les notes n'ont pas forcément un poids
    validate: {
      min: 0, // Le poids ne peut pas être négatif
    },
  },
}, {
  timestamps: true,
});

Grade.belongsTo(User, { foreignKey: 'student_id' });
Grade.belongsTo(Course, { foreignKey: 'course_id' });

module.exports = Grade;
