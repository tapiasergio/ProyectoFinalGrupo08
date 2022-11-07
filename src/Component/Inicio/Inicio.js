import React from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import Img from 'react-bootstrap/image';
import Portada from "./00.png";

function Inicio() {
  const navigate = useNavigate();
  return (
    <>
      <div className = "text-center">
        <Img src={Portada} style={{ width: '55%' }} />
      </div>
      <br></br>
      <div className="text-center">
        <Button variant='secondary' onClick={() => navigate("/game")}>
          Jugar
        </Button>
        <br></br><br></br>
        <Button onClick={() => navigate("/Desarrolladores")} variant='secondary'>
          Desarrolladores
        </Button>
        <br></br>
      </div>
       
    </>
    );
}

export default Inicio;