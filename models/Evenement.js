const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')

const Evenement = sequelize.define('Evenement', {
    nom: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false 
    },
    description: {
        type: DataTypes.TEXT
    },
    participants: {
        type: DataTypes.TEXT
    }
})

module.exports = Evenement;