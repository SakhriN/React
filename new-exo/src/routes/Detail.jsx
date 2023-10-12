import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
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
            <button>Ajouter au PANIER</button>
        </>
    )
}

export default Detail