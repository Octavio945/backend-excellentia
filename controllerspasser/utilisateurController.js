const Utilisateur = require('../models/Utilisateur')

// Recuperation de tous les utilisateur 
exports.getAllUtilisateurs = (req, res) => {
    Utilisateur.findAll()
    .then(utilisateur => {
        res.status(200).json(utilisateurs)
    })
    .catch(error => {
        res.status(400).json({error: error.message})
    })
}

// Recuperation des utilisateur par Identifiants 
exports.getUtilisateurById = (req, res) => {
    Utilisateur.findByPk(req.params.id)
    .then(utilisateur =>{
        if (!utilisateur) {
            return res.status(404).json({error: 'Utilisateur non trouvé'})
        }
        res.status(200).json(utilisateur)
    })
    .catch(error =>{
        res.status(400).json({error: error.message})
       })
}

// Crée un nouveau utilisateur 
exports.createUtilisateur = (req, res) =>{
    Utilisateur.create(res.body)
    .then(utilisateur => {
        res.status(201).json(utilisateur)
    })
    .catch(error => {
        res.status(400).json({error: error.message})
    })
}

// mise a jour d'un utilisateur 
exports.updateUtilisateur = (req, res) => {
    Utilisateur.findByPk(req.params.id)
    .then(utilisateur => {
        if (!utilisateur) {
            return res.status(404).json({error: 'Utilisateur non trouvé'})
        }
        return utilisateur.update(req.body)
    })
    .then(utilisateur => {
        res.status(200).json(utilisateur)
    })
    .catch(error => {
        res.status(400).json({error: error.message})
    })
}

// Supprimer un utilisateur 
exports.deleteUtilisateur = (req, res) =>{
    Utilisateur.findByPk(req.params.id)
    .then(utilisateur => {
        if (!utilisateur) {
            return res.status(404).json({error: 'Utilisateur non trouvé'})
        }
        return utilisateu.destroy()
    })
    .then(() => {
        res.status(204).json({message: 'Utilisateur Supprimer'})
    })
    .catch(error => {
        res.status(400).json({error: error.message})
    })
}