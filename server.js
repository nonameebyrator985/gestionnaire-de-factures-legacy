const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/factures', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get('/', (req, res) => {
  res.send('Bienvenue dans le Gestionnaire de Factures!');
});

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
