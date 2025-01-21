const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')
const Filiere = require('./Filiere')

const FiliereDetail = sequelize.define('FiliereDetail', {
    filiere_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Filiere,
            key: 'id'
        }
    },
    decription: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    debouches: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})

module.exports = FiliereDetail;