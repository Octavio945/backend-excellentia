const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Course = require('./Course');

const Schedule = sequelize.define('Schedule', {
  week_number: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  day_of_week: {
    type: DataTypes.ENUM('Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'),
    allowNull: false
  },
  start_time: {
    type: DataTypes.TIME,
    allowNull: false
  },
  end_time: {
    type: DataTypes.TIME,
    allowNull: false
  }
}, {
  timestamps: true
});

Schedule.belongsTo(Course, { foreignKey: 'course_id' });

module.exports = Schedule;