const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')
const Cours = require('./Cours')
const Filiere = require('./Filiere')

const CoursFiliere = sequelize.define('CoursFiliere', {
    cours_id: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        references: {
            model: Cours,
            key: 'id'
        }
    },
    filiere_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Filiere,
            key: 'id'
        }
    }
})

module.exports = CoursFiliere;