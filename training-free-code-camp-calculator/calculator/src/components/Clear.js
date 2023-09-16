import React from   'react';
import '../style-components/style-Clear.css';


const Clear = (props) => {
    return (
        <button className='style-Clear' onClick={() => props.myClear()}>
            {props.children}
        </button>
    );
};

export default Clear;

