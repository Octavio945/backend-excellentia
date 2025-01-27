const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');
const Matiere = require('./Matiere');
const AcademicYear = require('./AcademicYear');

const Course = sequelize.define('Course', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  }
}, {
  timestamps: true
});

Course.belongsTo(User, { foreignKey: 'teacher_id' });
Course.belongsTo(Matiere, { foreignKey: 'matiere_id' });
Course.belongsTo(AcademicYear, { foreignKey: 'academic_year_id' });

module.exports = Course;