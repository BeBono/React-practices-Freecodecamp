import React from "react";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";
import Cloud from "./images/Cloud.svg";
import { useState } from "react";

function App() {

  const [Clic, SetClic] = useState(0);

  const AumentarClic = () => {
    // Increment in 1 the state 'Clic'.
     SetClic(Clic + 1); 
  };

  const Reset = () => {
    // Set to cero the state 'Clic'.
    SetClic(0); 
  };

      // la función mentarClic se hereda/pasada como props para que sea invocada en onClick:

  return (
    <div className="App">
      <img src={Cloud} alt="Logo Cloud" className="style-logo" />
      <Counter coun={Clic} />
      <Button type="Clic" typeClic={AumentarClic} />   
      <Button type="Reset" typeClic={Reset} />
    </div>
  );
}

export default App;
