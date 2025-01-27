const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Event = require('./Event');
const User = require('./User');

const EventParticipant = sequelize.define('EventParticipant', {
}, {
  timestamps: true
});

Event.belongsToMany(User, { through: EventParticipant });
User.belongsToMany(Event, { through: EventParticipant });

module.exports = EventParticipant;