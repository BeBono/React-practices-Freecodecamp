import React from "react";
import '../style-components/style-Screen.css';

const Screen = (props) => {
    return (
        <div className="style-Screen">
            {props.input}
        </div>
    );
};

export default Screen;