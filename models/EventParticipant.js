const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Event = require('./Event');
const User = require('./User');

const EventParticipant = sequelize.define('EventParticipant', {
  status: {
    type: DataTypes.ENUM('pending', 'confirmed', 'canceled'),
    allowNull: false,
    defaultValue: 'pending', // Par défaut, la participation est en attente
  }
}, {
  timestamps: true
});

// Relations entre Event et User via la table EventParticipant
Event.belongsToMany(User, { through: EventParticipant });
User.belongsToMany(Event, { through: EventParticipant });

module.exports = EventParticipant;
