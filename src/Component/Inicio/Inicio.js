import React from "react";
import "./StyleInicio.css";
import image from "./BIENVENIDOS.jpg"
import sonido from "./audio_file.mp3"

function Inicio() {
  
  new Audio(sonido).play();
  return (
      <div className="div-Inicio">
        <img className="Imagen-Inicio" src={image} alt='error'></img>
      </div>
    );
}

export default Inicio;