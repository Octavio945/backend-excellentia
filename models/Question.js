const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Question = sequelize.define('Question', {
  visitor_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  visitor_email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  question: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  timestamps: true
});

module.exports = Question;
