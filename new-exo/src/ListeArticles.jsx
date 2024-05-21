import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




function ListeArticles() {
  const [articles, setArticles] = useState([]);
  let navigue = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:6969/articles")
      .then(response => {
        setArticles(response.data.listeArticle); // Vous pouvez accéder aux articles via response.data.listeArticle
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
 // Le tableau vide [] signifie que useEffect s'exécute une seule fois après le montage initial

  return (
    <div>
      <h1>Liste des Articles</h1>
      <ul className='row'>
        {articles.map(article => (
          <li className='col-4' key={article.id}>
            <h2>{article.nom}</h2>
            <p>Prix : {article.prix} €</p>
            <button onClick={()=>{navigue(`/detail/${article.id}`)}}>Voir les détails</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListeArticles;
