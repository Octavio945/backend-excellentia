const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Filiere = require('./Filiere');
const Matiere = require('./Matiere');
const AcademicYear = require('./AcademicYear'); // Assurez-vous que le modèle AcademicYear est bien importé

const FiliereMatiere = sequelize.define('FiliereMatiere', {
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
Filiere.belongsToMany(Matiere, { through: FiliereMatiere });
Matiere.belongsToMany(Filiere, { through: FiliereMatiere });

// Relation entre FiliereMatiere et AcademicYear
FiliereMatiere.belongsTo(AcademicYear, {
  foreignKey: 'academic_year_id',
  as: 'academicYear', // Alias pour la relation
});

module.exports = FiliereMatiere;
