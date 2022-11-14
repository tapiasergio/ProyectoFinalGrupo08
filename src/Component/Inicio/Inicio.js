import React from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

function Inicio() {
  const navigate = useNavigate();
  return (
    <>
      <div className = "text-center">
        
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