const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');
const Matiere = require('./Matiere');
const AcademicYear = require('./AcademicYear');
const Filiere = require('./Filiere'); // Assurez-vous que le modèle Filiere est bien importé

const Course = sequelize.define('Course', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  filiere_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Filiere, // Référence à la table Filiere
      key: 'id',
    },
    onDelete: 'CASCADE', // Si une filière est supprimée, les cours associés seront également supprimés
  }
}, {
  timestamps: true
});

// Relations Sequelize
Course.belongsTo(User, { foreignKey: 'teacher_id' });
Course.belongsTo(Matiere, { foreignKey: 'matiere_id' });
Course.belongsTo(AcademicYear, { foreignKey: 'academic_year_id' });
Course.belongsTo(Filiere, { foreignKey: 'filiere_id', as: 'filiere' }); // Lien avec Filiere

module.exports = Course;
