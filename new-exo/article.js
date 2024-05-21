const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 6969;


// Utiliser CORS pour permettre les requêtes cross-origin
app.use(cors());
app.use(express.json());

// Chargement des données depuis les fichiers JSON
const articleData = JSON.parse(fs.readFileSync('listeArticle.json'));

// Route pour afficher la liste des articles
app.get('/articles', (req, res) => {
  res.json(articleData);
});

// Route pour afficher un article par son ID
app.get('/article/:id', (req, res) => {
    const articleId = parseInt(req.params.id);
    const article = articleData.listeArticle.find(article => article.id === articleId);
    if (article) {
      res.json(article);
    } else {
      res.status(404).json({ message: 'Article non trouvée' });
    }
});


  app.post('/articles', (req, res) => {
    const nouveauArticle = req.body;
    articleData.listeArticle.push(nouveauArticle);
    // Enregistrez la mise à jour dans le fichier JSON
    fs.writeFileSync('listeArticle.json', JSON.stringify(articleData, null, 2));
    res.status(201).json(nouveauArticle);
  });



app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});