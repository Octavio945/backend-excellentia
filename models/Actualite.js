const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')

const Actualite = sequelize.define('Actualite', {
    titre : {
        type: DataTypes.STRING,
        allowNull: false 
    },
    contenu: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    date_publication: {
        type: DataTypes.DATE,
        allowNull: false 
    }
})

module.exports = Actualite;