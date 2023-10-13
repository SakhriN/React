import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Detail() {
  let navigue = useNavigate()
const {id} = useParams();
const [article, setArticle] = useState([]);
useEffect(() => {
    console.log(id)
    axios.get(`http://localhost:6969/listeArticle/${id}`)
      .then(response => {
        setArticle(response.data);

      })
      .catch(error => {
        console.error(error);
      });
    }, [id]);

    function addToLocale() {
      localStorage.setItem("id", Math.round(Math.random()*150))
      localStorage.setItem("nom", article.nom)
      localStorage.setItem("",article.prix)
      navigue("/Panier/")
    }

    return (

        <>
            <h1>DETAIL TEST</h1>
            
            <hr></hr>
            <h2>NOM DE L'ARTICLE :</h2>
            <h2>{article.nom}</h2>
            <hr></hr>
            <h2>DESCRIPTION :</h2>
            <h2>{article.description}</h2>
            <hr></hr>
            <h2>PRIX :</h2>
            <h2>{article.prix} €</h2>
            <hr></hr>
            <button onclick={()=>{addToLocale()}}>Ajouter au PANIER</button>
        </>
    )
}

export default Detail