const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Course = require('./Course');
const User = require('./User'); // Pour référencer les professeurs

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
    type: DataTypes.STRING, // Type String pour le nom ou le numéro de la salle
    allowNull: false // Indique que la salle est obligatoire
  },
  professor_id: {
    type: DataTypes.INTEGER, // Référence à l'ID du professeur
    allowNull: false, // Obligatoire
    references: {
      model: User, // Référence à la table User, où se trouvent les professeurs
      key: 'id' // La clé primaire de la table User
    }
  }
}, {
  timestamps: true
});

Schedule.belongsTo(Course, { foreignKey: 'course_id' });
Schedule.belongsTo(User, { foreignKey: 'professor_id' }); // Lien avec la table User pour le professeur

module.exports = Schedule;
