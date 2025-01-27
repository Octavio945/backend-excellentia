const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');
const Matiere = require('./Matiere');

const ProfesseurMatiere = sequelize.define('ProfesseurMatiere', {
}, {
  timestamps: true
});

User.belongsToMany(Matiere, { through: ProfesseurMatiere });
Matiere.belongsToMany(User, { through: ProfesseurMatiere });

module.exports = ProfesseurMatiere;
