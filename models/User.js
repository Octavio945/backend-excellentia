const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true, // Vérifie que l'email est valide
    },
  },
  role: {
    type: DataTypes.ENUM('student', 'teacher', 'admin'),
    allowNull: false,
    defaultValue: 'student', // Définir un rôle par défaut
  },
  profile_picture: {
    type: DataTypes.STRING,  // Stocke l'URL ou le chemin de la photo de profil
    allowNull: true,         // Ce champ est facultatif
  },
  status: {
    type: DataTypes.ENUM('active', 'inactive'),
    allowNull: false,
    defaultValue: 'active', // Par défaut, le compte est actif
  },
}, {
  timestamps: true, // Active automatiquement createdAt et updatedAt
  createdAt: 'created_at', 
  updatedAt: 'updated_at',
});

module.exports = User;
