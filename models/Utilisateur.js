const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')

const Utilisateur = sequelize.define('Utilisateur', {
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    mot_de_passe: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date_inscription: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    type_utilisateur: {
        type: DataTypes.ENUM('etudiant', 'professeur', 'administrateur'),
        allowNull: false
    },
    filiere_id: {
        type: DataTypes.INTEGER,
    },
    matiere_enseignee: {
        type: DataTypes.STRING
    },
    droits_acces: {
        type: DataTypes.STRING
    }
})

module.exports = Utilisateur;