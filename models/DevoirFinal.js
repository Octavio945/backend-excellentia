const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Assignment = require('./Assignment');

const DevoirFinal = sequelize.define('DevoirFinal', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  grade: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  timestamps: true
});

DevoirFinal.belongsTo(Assignment, { foreignKey: 'assignment_id' });

module.exports = DevoirFinal;
