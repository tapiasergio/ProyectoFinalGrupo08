import React from "react";
import Teams from "../Desarrolladores/TeamData.json";
import "./Style.css";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Img from 'react-bootstrap/image';

function Desarrolladores(){
    const navigate = useNavigate();
    return(
    <div className="estilo" >
            <div>
                <h1> LISTA DE DESARROLLADORES  </h1>
                <table className="table" bgcolor="#FFFF00">
                    <thead>
                        <tr className = "text-center">
                            <th>IMAGEN</th>
                            <th>LU</th>
                            <th>APELLIDO</th>
                            <th>NOMBRE</th>
                            <th>GITHUB</th>
                            <th>DESCRIPCIÓN</th>
                            <th>EDAD</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Teams.map(user => {
                            return(
                                <tr key={user.LU} className = "text-center">
                                    <td class="border"><Img src={user.imagen} style={{width: '67%'}}></Img></td>
                                    <td class="border"><br></br>{user.LU}</td>
                                    <td class="border"><br></br>{user.apellido}</td>
                                    <td class="border"><br></br>{user.nombre}</td>
                                    <td class="border"><br></br><a href={user.GitHub}>{user.GitHub}</a></td>
                                    <td class="border">{user.descripcion}<br></br>{user.descripcion2}</td>
                                    <td class="border"><br></br>{user.edad}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div>
                <Button onClick={() => navigate("/")} size="sm" variant="secondary">
                    Regresar al Inicio
                </Button>
            </div>
    </div>
    );
}

export default Desarrolladores;