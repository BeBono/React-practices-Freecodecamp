import React from "react";
import '../style-components/style-Button.css';

const Button = (props) => {


  
    return (
        <button className="style-Button" onClick={() => props.EventButton(props.children)}  >
            {/* It takes the text written between closed tags: */}
            {props.children}   
        </button>
    );
};


export default Button;