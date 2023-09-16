import React from "react";


function Mycomponent(props) {
  return (
    <div className="container-comp">
      <img
        src={require(`../images/${props.image}.png`)}
        alt="example of images"
        className="style-image"
      />

      <div className="style-information">
        <h1>informacion</h1>
      <p className="style-profession">Profession:{props.Profession} </p>
      <p className="style-name">First Name: {props.FirstName} </p>
      <p className="style-description">Description: {props.Description}</p>

      </div>


      {/* <img src="https://i.ibb.co/pv0H4VN/Mi-foto-codie-perfil.png" alt="example of images" className="style-image" /> */}
    </div>
  );
}

export default Mycomponent;
