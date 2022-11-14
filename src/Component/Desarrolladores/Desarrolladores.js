import React from "react";
import Teams from "../Desarrolladores/TeamData.json";
import "./Style.css";

function Desarrolladores(){
    return(
        <div style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL + '/img/background.jpg'})`,
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
                    <h2>{grupo.nombre} {grupo.apellido} <br></br><span>Desarrollador</span></h2>
                    <div className='card-datos'>
                        <h3>{grupo.descripcion}
                        <br></br>
                        <span>
                        <a href={grupo.GitHub}>GitHub </a>
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