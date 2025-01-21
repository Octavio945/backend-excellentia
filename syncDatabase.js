const sequelize = require('./config/db');
const Utilisateur = require('./models/Utilisateur')
const Filiere = require('./models/Filiere')
const FiliereDetail = require('./models/FiliereDetail')
const Cours = require('./models/Cours')
const Ressource = require('./models/Ressource')
const Devoir = require('./models/Devoir')
const Note = require('./models/Note')
const Evenement = require('./models/Evenement')
const Actualite = require('./models/Actualite')
const Paiement = require('./models/Paiement')
const QuestionVisiteur = require('./models/QuestionVisiteur')
const Calentrier = require('./models/Calentrier')
const CoursFiliere = require('./models/CoursFilliere')

sequelize.sync()
    .then(() => {
        console.log('Base de Données Synchronisée');
    })
    .catch(err => {
        console.error('Erreur lors de la synchronisation de la Base de Données ', err)
    } );