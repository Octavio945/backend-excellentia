const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');
const AcademicYear = require('./AcademicYear');
const Filiere = require('./Filiere');

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
      model: Filiere,
      key: 'id',
    },
    onDelete: 'CASCADE'
  }
}, {
  timestamps: true
});

Course.belongsTo(User, { foreignKey: 'teacher_id', onDelete: 'CASCADE' });
Course.belongsTo(AcademicYear, { foreignKey: 'academic_year_id', onDelete: 'CASCADE' });
Course.belongsTo(Filiere, { foreignKey: 'filiere_id', as: 'filiere', onDelete: 'CASCADE' });

module.exports = Course;
