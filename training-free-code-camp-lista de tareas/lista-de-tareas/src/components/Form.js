import React, {useState} from "react";
import '../styles/style-form.css'

function Form(props) {

    const [input, setInput] = useState ("");

    const ManejarCambio = elvalorescrito => {
        setInput(elvalorescrito) //Actualiza es estado de "input" con el valor del parámetro que a su vez proviene del evanto: e.target.value.
        console.log(input)
    };
    
    const ManejarEnvio = e => {
        e.preventDefault();
        console.log("Prueba de no actualizacion de la página")

        const newTask = {
            id: new Date().getTime(),
            texto: input,
            completada: false

        };

        props.AddTarea(newTask)

        // console.log({TareaNueva});
    };



  return (
    <form  onSubmit={ManejarEnvio} >
      <input
        onChange ={(e) => ManejarCambio(e.target.value)}
        type="text"
        className="style-input"
        placeholder="Add a new task"
      ></input>
      <button className="style-button">Crear</button>
    </form>
  );
}

export default Form;
