const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Event = sequelize.define('Event', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  event_date: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  timestamps: true
});

module.exports = Event;
