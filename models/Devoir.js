const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')
const Cours = require('./Cours')

const Devoir = sequelize.define('Devoir', {
    type: {
        type: DataTypes.ENUM('interrogation', 'devoir_final'),
        allowNull: false 
    }, 
    nom: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    description: {
        type: DataTypes.TEXT 
    },
    date_soumission: {
        type: DataTypes.DATE,
        allowNull: false 
    },
    cours_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Cours,
            key: 'id'
        }
    }
})

module.exports = Devoir;