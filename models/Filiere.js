const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')

const Filiere = sequelize.define('Filiere', {
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    }
})

module.exports = Filiere; 