const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')
const Utilisateur = require('./Utilisateur')

const Paiement = sequelize.define('Paiement', {
    etudiant_is: {
        type: DataTypes.INTEGER, 
        references: {
            model: Utilisateur,
            key: 'id'
        }
    },
    montant: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false 
    },
    date_paiement: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Paiement;