// charger les differentes bibliotheques 
const express = require('express')
const app = express()
const sequelize = require('./config/db');
const routes = require('./routes');


//charger les varriables d'envirronements 
require ('dotenv').config()
const PORT = process.env.APP_PORT || 5000

app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Le serveur est lancé sur http://localhost:${port}`);
})

    
// (async () => {
//     await sequelize.sync({ force: false }); // Synchronise les tables avec la base.
// })();

// repertoire static 
// app.use('/assets',express.static('public'))

//mes middleswares
// app.use(express.urlencoded({ extended: true }));

// app.listen(PORT, async () => {

//     try{
//         await sequelize.authenticate();
//         console.log(`Connecté à la base de données et serveur lancé sur le port ${PORT}`);
        
//     } catch(error) {
//         console.error('Impossible de se connecter à la base de données :', error);
//     }

//     console.log(`Le serveur est lancé sur http://localhost:${port}`);
// });