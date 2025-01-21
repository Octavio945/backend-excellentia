const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')

const QuestionVisiteur = sequelize.define('QuestionVisiteur', {
    nom: {
        type: DataTypes.STRING,
        allowNull: false 
    }, 
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    messege: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    date_question: {
        type: DataTypes.DATE,
        allowNull: false
    },
    reponse: {
        type: DataTypes.TEXT
    }
})

module.exports = QuestionVisiteur;