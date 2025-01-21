const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')
const Cours = require('./Cours'); 

const Ressource = sequelize.define('Ressource', {
    type: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    lien: {
        type: DataTypes.STRING,
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

module.exports = Ressource;