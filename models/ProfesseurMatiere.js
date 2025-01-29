const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');
const Matiere = require('./Matiere');
const AcademicYear = require('./AcademicYear'); // Assurez-vous que le modèle AcademicYear est bien importé

const ProfesseurMatiere = sequelize.define('ProfesseurMatiere', {
  academic_year_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: AcademicYear, // Référence à la table AcademicYear
      key: 'id',
    },
    onDelete: 'CASCADE', // Si une année académique est supprimée, les matières correspondantes seront également supprimées
  },
}, {
  timestamps: true,
});

// Définir les relations
User.belongsToMany(Matiere, { through: ProfesseurMatiere });
Matiere.belongsToMany(User, { through: ProfesseurMatiere });

// Relation entre ProfesseurMatiere et AcademicYear
ProfesseurMatiere.belongsTo(AcademicYear, {
  foreignKey: 'academic_year_id',
  as: 'academicYear', // Alias pour la relation
});

module.exports = ProfesseurMatiere;
