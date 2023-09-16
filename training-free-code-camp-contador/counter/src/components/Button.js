import React from "react";
import '../styles/Stylebutton.css'

function Button ({type, typeClic}) { //Typeclic es una función que se pasa/hereda del padre App.js como propiedad y se invoca en onClick.
    return (
        <div className="style-button-container">
        <button className="style-button" onClick={()=>{typeClic()}}>{type}</button>
        </div>
    );
}

export default Button;