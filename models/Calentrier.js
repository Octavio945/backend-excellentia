const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')
const Utilisateur = require('./Utilisateur')
const Cours = require('./Cours')
const Evenement = require('./Evenement')

const Calendrier = sequelize.define('Calendrier', {
    type: {
        type: DataTypes.ENUM('cours', 'evenement'),
        allowNull: false
    }, 
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    heure: {
        type: DataTypes.TIME,
        allowNull: false
    },
    professeur_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Utilisateur,
            key: 'id'
        }
    },
    salle: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    cours_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Cours, 
            key: 'id'
        }
    },
    evenement_id: {
        type: DataTypes.INTEGER, 
        references: {
            model: Evenement,
            key: 'id'
        }
    }
})

module.exports = Calendrier;