const express = require('express');
const { json } = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());

// Connexion à MongoDB
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/factures';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connexion à MongoDB réussie');
}).catch(err => {
  console.error('Erreur de connexion à MongoDB:', err);
});

app.get('/', (req, res) => {
  res.send('Bienvenue dans le Gestionnaire de Factures!');
});

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});