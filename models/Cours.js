const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')
const Utilisateur = require('./Utilisateur')

const Cours = sequelize.define('Cours', {
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    professeur_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Utilisateur, 
            key: 'id'
        }
    }
})

module.exports = Cours; 