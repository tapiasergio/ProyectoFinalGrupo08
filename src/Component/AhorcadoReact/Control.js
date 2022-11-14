import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import "./style.css";

/*
    se crea una clase "Control" que simulara en pantalla los botones 
    que el usuario utilizara
*/
class Control extends Component{
    constructor(props){//creamos un constructor parametrizado
        super(props);
        this.getControl = this.getControl.bind(this);
    }

    getControl(){
        return this.props.botones.map((boton, index) => (//se lee el array botones y se los recorre con los elementos btn, tendiendo como clave el index
            <Button
                    /**se establece el estilo de los botones que tomara color azul en caso de que el boton no este pulsado y rojo en caso de que este pulsado */
                    variant={boton.estado == "no-pulsado" ? "primary" : (boton.estado == "pulsado-acertado" ? "success" : "danger")} 
                    key={index}
                    disabled={boton.estado != "no-pulsado" ? true : false}
                    /**al hacer click sobre el boton llama a la funcion sePulsoBoton y le pasa por parametro el index del boton pulsado */ 
                    onClick={() => this.props.sePulsoBoton(index)}>
                {boton.letra}    
            </Button>
        ));
    }
    render() {
        return (
            <div id="botonera">
              {this.getControl()}
            </div>
        );
      }
}

export default Control;