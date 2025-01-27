const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');
const Course = require('./Course');

const Grade = sequelize.define('Grade', {
  grade_type: {
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

Grade.belongsTo(User, { foreignKey: 'student_id' });
Grade.belongsTo(Course, { foreignKey: 'course_id' });

module.exports = Grade;