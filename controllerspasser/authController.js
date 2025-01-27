const bcryt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Utilisateur = require('../models/Utilisateur')

// INSCRIPTION
exports.register = (req, res ) => {
    const {nom, email, mot_de_passe, type_utilisateur} = req.body 

    // Hacher le mot de passe 
    bcryt.hash(mot_de_passe, 10)
        .then(hashedPassword => {
            // Cree un noveau utilisateur 
            return Utilisateur.create({nom, email, mot_de_passe: hashedPassword, type_utilisateur})
        })
        .then(utilisateur => {
            // Repondre avec l'utilisateur crées 
            res.status(201).json(utilisateur)
        })
        .catch(error => {
            // gere les erreurs 
            res.status(400).json ({error: error.message})
        })
}

// CONNEXION
exports.login = (req, res) => {
    const {email, mot_de_passe} = req.body

    // trouver l'utilisateur pas mail 
    Utilisateur.findOne({where: {email}})
    .then(utilisateur => {
        if (!utilisateur) {
            return res.status(400).json({error: 'Utilisateur non trouvé'})
        }
        //Veruifier si le mot de passe est correct
        return bcryt.compare(mot_de_passe, utilisateur.mot_de_passe)
        .then(isMatch => {
            if (!isMatch) {
                return res.status(400).json({error: 'Mot de passe Incorrect '})
            }
            // generer le token JWT 
            const token = jwt.sign({id: utilisateur.id}, 'secret_key', {expiresIn: '1h'})
            res.status(200).json({token})
        })
    })
    .catch(error => {
        // Gerer les erreurs 
        res.status(400).json({error: error.message})
    })
}