import "./App.css";
import Button from "./components/Button";
import Screen from "./components/Screen";
import Clear from "./components/Clear";
import { useState } from "react";
import { evaluate } from "mathjs"; //Asses/compute math expressions


function App() {
  const [Result, SetResult] = useState(""); //Hook.

  const HandButton = (pChildren) => { //Parameter pChildren brought from Button.js

    if ( Result.length < 14)  {
      SetResult(Result + pChildren)
    }
 
  };

  const FClear = () => { //Funtion Clear
    console.log("hi");
    SetResult("");
  };

  const HandResult = () => {

    SetResult(evaluate(Result));

  };

  return (
    <div className="App">
      <div className="Calculator-container">
        <div className="Screen-container">
          <Screen input={Result} />
        </div>

        <div className="fila">
          <Button EventButton={HandButton}>1</Button>
          <Button EventButton={HandButton}>2</Button>
          <Button EventButton={HandButton}>3</Button>
          <Button EventButton={HandButton}>+</Button>
        </div>
        <div className="fila">
          <Button EventButton={HandButton}>4</Button>
          <Button EventButton={HandButton}>5</Button>
          <Button EventButton={HandButton}>6</Button>
          <Button EventButton={HandButton}>-</Button>
        </div>
        <div className="fila">
          <Button EventButton={HandButton}>7</Button>
          <Button EventButton={HandButton}>8</Button>
          <Button EventButton={HandButton}>9</Button>
          <Button EventButton={HandButton}>*</Button>
        </div>
        <div className="fila">
          <Button EventButton={HandButton}>0</Button>
          <Button EventButton={HandButton}>.</Button>
          <Button EventButton={HandResult}>=</Button>
          <Button EventButton={HandButton}>/</Button>
        </div>

        <div className="Clear-container">
          <Clear myClear={FClear}>Clear</Clear>
        </div>
      </div>
    </div>
  );
}

export default App;
