const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Assignment = require('./Assignment');

const Interrogation = sequelize.define('Interrogation', {
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

Interrogation.belongsTo(Assignment, { foreignKey: 'assignment_id' });

module.exports = Interrogation;
