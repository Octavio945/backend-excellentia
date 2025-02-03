const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Course = require('./Course');
const User = require('./User');

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
  },
  classroom: {
    type: DataTypes.STRING,
    allowNull: true
  },
  professor_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
    onDelete: 'CASCADE'
  }
}, {
  timestamps: true
});

Schedule.belongsTo(Course, { foreignKey: 'course_id', onDelete: 'CASCADE' });
Schedule.belongsTo(User, { foreignKey: 'professor_id', onDelete: 'CASCADE' });

module.exports = Schedule;
