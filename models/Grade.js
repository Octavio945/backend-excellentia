const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');
const Course = require('./Course');

const Grade = sequelize.define('Grade', {
  grade_type: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [['devoir', 'interrogation', 'examen']],
    },
  },
  grade: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: 0,
      max: 20,
    },
  },
  category: {
    type: DataTypes.ENUM('devoir', 'interrogation', 'examen'),
    allowNull: false,
  },
  weight: {
    type: DataTypes.FLOAT,
    allowNull: true,
    validate: {
      min: 0,
    },
  },
}, {
  timestamps: true,
});

Grade.belongsTo(User, { foreignKey: 'student_id', onDelete: 'CASCADE' });
Grade.belongsTo(Course, { foreignKey: 'course_id', onDelete: 'CASCADE' });

module.exports = Grade;
