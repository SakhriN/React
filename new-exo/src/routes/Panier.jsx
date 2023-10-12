import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

    function Panier() {
        const [articles, setArticles] = useState([]);
        let navigue = useNavigate()
        useEffect(() => {
          axios.get("http://localhost:6900/panier")
            .then(response => {
              setArticles(response.data);
              console.log(articles);
            })
            .catch(error => {
              console.error(error);
            });
        }, []); // Le tableau vide [] signifie que useEffect s'exécute une seule fois après le montage initial
      
        return (
          <div>
            <button onClick={()=>{navigue(`/`)}}>Retour au menu principal</button>
            <h1>Liste des Articles</h1>

            {articles.length == 0 ? 
            <ul>
              {articles.map(article => (
                <li key={article.id}>
                  <h2>{article.nom}</h2>
                  <p>Prix : {article.prix} €</p>
                </li>
              ))}
            </ul>: <p>Va te faire foutre</p>}
          </div>
        );
      }

export default Panier