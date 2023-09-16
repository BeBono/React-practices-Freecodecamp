import React from "react";
import Tarea from "./Tarea";
import Form from "./Form";
import "../styles/style-ListadeTareas.css";

import { useState } from "react";

function ListaTareas() {
  const [TareaUP, SetTareaUP] = useState([]);

  const AgregarTarea = (nuevatarea) => {
    if (nuevatarea.texto.trim()) {//Verify that the text is not empty.
      nuevatarea.texto = nuevatarea.texto.trim(); //Reasigna al texto un texto sin espacios al inicio y sin espacio al final. Make sure of pass a string.
      const tasksApdated = [nuevatarea, ...TareaUP]; //Agrega el texto de la nueva tarea como un nuevo objeto dentro del conjunto de objetos en el Array.
      SetTareaUP(tasksApdated); //Renderiza el componente.
      console.log(TareaUP);
    }
  };

  const completarTarea = (id) => {
    
    //A continuación dos formas modificar el estado y actualizarlo:

    // Primero forma:

  //   const Realizada = JSON.parse(JSON.stringify(TareaUP)); // Crear una copia independiente de TareaUP requerida para actualizar cuando se logre mutar 'Realizada'.

  //     for (var i = 0; i < Realizada.length; i++) {
  //     if (Realizada[i].id === id ) {
  //       Realizada[i].completada = true
  //     }  
  //   }
   
  //   SetTareaUP(Realizada);

  // };


   // Segunda forma:


    const tareasActualadas =  TareaUP.map(palabra => {
      if (palabra.id === id) {
        palabra.completada = !palabra.completada;
      }

      return palabra;
    });

    SetTareaUP(tareasActualadas);

  };

  const eliminarTarea = id => {
    delete (TareaUP.filter(filtrar =>  filtrar.id === id)); //Borra el objeto según id.
    const tareasActualadas = TareaUP.filter(filtrar =>  filtrar.id !== id); //Asigna a una nueva variable el filtro de TareaUP excepto la del ID borrado.
    SetTareaUP(tareasActualadas);  //Actualiza el estado y renderiza las tareas que no han sido eliminadas.

  };

  return (
    <>
      <Form AddTarea={AgregarTarea} />
      <div className="style-ListadeTareas">
        {TareaUP.map((nuevatarea) => (
          <Tarea
            key={nuevatarea.id}
            id={nuevatarea.id}
            texto={nuevatarea.texto}
            completada={nuevatarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea} />
        ))}
      </div>
    </>
  );
}

export default ListaTareas;
