import axios from 'axios';
import './App.css';
import { useEffect, useRef, useState } from 'react';
 import "bootstrap/dist/css/bootstrap.min.css";
 import Tasklist from './components/taskList';

 
 function App() {
  function init() {
    axios.get("http://localhost:6969/liste")
      .then(response => {
        console.log(response.data)
        tacheRef.current.value =""
      })
      .catch(error => {
        console.error("erreur :", error)
      })
  }


  useEffect(() => {
    init()
  }, [])


  const tacheRef = useRef()
  function addTask(e) {
    e.preventDefault()
    axios.post("http://localhost:6969/liste", { tache: tacheRef.current.value, id:Math.round(Math.random()*181215) })
      .then(response => {
        console.log(response.data)
        init()
      })
      .catch(error => {
        console.error("Erreur : ", error)
      })
  }


  return (
    <>
    <div className="App">
      <form onSubmit={addTask}>
        <div><label>Insérez la tâche :</label></div>
        <div><input ref={tacheRef} type="text" required></input></div>
        <div><button>insertion</button></div>
      </form>
    </div>
    <hr></hr>
    <h1 className='text-center'>Tâches a effectuer :</h1>
    <Tasklist/>
    </>
  );
}



export default App ;
