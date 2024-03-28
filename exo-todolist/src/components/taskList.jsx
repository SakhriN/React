import axios from "axios"
import { useState, useEffect } from "react"


function Tasklist() {
    const [tableau, setTableau] = useState([])

    function deleteTask(id) {
        axios.delete(`http://localhost:6969/liste/${id}`)
          .then(response => {
            console.log(response.data)
            setTableau(tableau.filter(element => element.id !== id));
          })
          .catch(error => {
            console.error("Erreur : ", error)
          })
      }
    

      function init() {
        axios.get("http://localhost:6969/liste")
          .then(response => {
            setTableau(response.data)
          })
          .catch(error => {
            console.error("erreur :", error)
          })
      }
    
    
      useEffect(() => {
        init()
      }, [tableau])

    return(

        <>
        <ul>{tableau.map(element=>
        <li className="text-center">{element.tache}<button>Editer</button><button onClick={()=>{deleteTask(element.id)}}>Supprimer</button></li>
        
        )}</ul>
        
        </>
    )

}

export default Tasklist