import React from "react";
import Teams from "../Desarrolladores/TeamData.json";
import "./Style.css";
import sonido from "./audioD.mp3"

function Desarrolladores(){
    new Audio(sonido).play();
    return(
        <div style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL + '/img/azul.jpg'})`,
          }}>
        <div className='card-diseñadores-bg,  text-center'>
       {Teams.map(grupo => {
        return(
            <div className='card-diseñadores'>
            <div className='card-grupo'>
            <div className='card-linea'></div>
            <div className='img-des'> 
            <img src={grupo.imagen} alt="desa"></img>
            </div>
            <div className='card-contenido'>
                <div className='card-detalle'>
                    <h2>{grupo.nombre} {grupo.apellido} <br></br><span>Desarrollador Lu: {grupo.LU}</span>
                    </h2>
                    <div className='card-datos'>
                        <h3>{grupo.descripcion}
                        <br></br>
                        {grupo.descripcion2}
                        <span>
                        <br></br>
                        
                        <br></br>
                        <a href={grupo.GitHub}>Ir al Git Hub</a>
                        </span>
                        </h3>
                    </div>
                </div>
            </div>
            
        </div>
            </div>
            
            );
       })}
        
        </div>
        </div>
        
       );
}

export default Desarrolladores;