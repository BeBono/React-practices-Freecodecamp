import React from "react";
import "./App.css";
import ListaTareas from './components/ListadeTareas';


function App() {

  return (
    <div className="App">
      <div className="main-container">
        
        <h1>Lista de Tareas</h1>
         <ListaTareas />
       </div>
    </div>
  );
}

export default App;