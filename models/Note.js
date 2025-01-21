const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')
const Utilisateur = require('./Utilisateur')
const Cours = require('./Cours')

const Note = sequelize.define('Note', {
    etudiant_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Utilisateur,
            key: 'id'
        }
    },
    cours_id: {
        type: DataTypes.INTEGER, 
        references: {
            model: Cours,
            key: 'id'
        }
    },
    type_devoir: {
        type: DataTypes.ENUM('interrogation','devoir_final'),
        allowNull: false
    },
    note: {
        type: DataTypes.DECIMAL(5, 2), 
        allowNull: false 
    },
    date_evaluation: {
        type: DataTypes.DATE,
        allowNull: false 
    }
})

module.exports = Note ;