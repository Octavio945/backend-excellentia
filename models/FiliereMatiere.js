const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Filiere = require('./Filiere');
const Matiere = require('./Matiere');

const FiliereMatiere = sequelize.define('FiliereMatiere', {
}, {
  timestamps: true
});

Filiere.belongsToMany(Matiere, { through: FiliereMatiere });
Matiere.belongsToMany(Filiere, { through: FiliereMatiere });

module.exports = FiliereMatiere;