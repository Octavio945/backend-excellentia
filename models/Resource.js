const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Course = require('./Course');
const User = require('./User');

const Resource = sequelize.define('Resource', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  file_path: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true
});

Resource.belongsTo(Course, { foreignKey: 'course_id' });
Resource.belongsTo(User, { foreignKey: 'uploaded_by' });

module.exports = Resource;