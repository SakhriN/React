
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
import ListeArticles from './ListeArticles';

function App() {

  axios.get("http://localhost:6969/listeArticle")
  .then( response=>{
    console.log(response.data)
})
  .catch( error => {
    console.error(error)
})

  return (
    <div className="App row">
<h1>Bienvenue dans le pire site de tous les temps</h1>
      <hr></hr>
      <ListeArticles/>

    </div>
  );
}

export default App;

