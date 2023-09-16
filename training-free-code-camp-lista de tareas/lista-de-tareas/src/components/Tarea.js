import React from "react";
import "../styles/style-tarea.css";
import { AiOutlineCloseSquare } from "react-icons/ai";


function Tarea({id, texto, completada, completarTarea, eliminarTarea} ) {
  return (
    <div className= {completada ? "style-tarea completada" : "style-tarea"}  >
      <div onClick={() => completarTarea(id)} className="Texto">
        {texto}
      </div>
      <div onClick={() =>  eliminarTarea(id)} className="Delete">  
        <AiOutlineCloseSquare className="icono" />
      </div>
    </div>
  );
}

export default Tarea;
