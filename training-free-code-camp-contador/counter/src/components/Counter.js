import React from "react";
import '../styles/Stylecounter.css';


function Counter ({coun}) {
    return (
        <div className="Style-counter">
            {/* It Brings/shows the initial value of 'Clic' from Hook in (0) App.js: */}
            {coun} 
        </div>
    )
}

export default Counter