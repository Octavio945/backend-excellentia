const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Matiere = sequelize.define('Matiere', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  }
}, {
  timestamps: true
});

module.exports = Matiere;