import Mycomponent from "./component/Component.js";
import "./stylecomponent/styleApp.css";

function App() {
  return (
    <div className="App">
      <div className="main-container"> 
      <h1>Prueba de Contenedores con React</h1>
      <Mycomponent image="Proyecto1" Profession="Engeneer" FirstName = "BeBono1" Description="COMPONENTE ORIGEN"  />
      <Mycomponent image="Proyecto1" Profession="Engeneer2" FirstName = "BeBono2" Description="COMPONENTE REUSADO 2" />
      <Mycomponent image="Proyecto1" Profession="Engeneer3" FirstName = "BeBono3" Description="COMPONENTE REUSADO 3" />
      </div>
    </div>
  );
}

export default App;
