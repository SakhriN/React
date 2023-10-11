import axios from "axios"
import { useState } from "react"


function Tasklist() {
    const [tableau, setTableau] = useState([])

    axios.get("http://localhost:6969/liste")
    .then(response => {
        setTableau(response.data)
    })
    .catch(error => {
      console.error("erreur :", error)
    })

    
    
    return(

        <>
        <ul>{tableau.map(element=>
        <li className="text-center">{element.tache}<button>Editer</button><button>Supprimer</button></li>
        
        )}</ul>
        
        </>
    )

}

export default Tasklist