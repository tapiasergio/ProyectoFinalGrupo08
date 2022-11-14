import React, {Component} from "react";
import "./style.css";

class Palabra extends Component{
    
    render(){
        return(
        <p className="text-white" id="palabra">{this.props.palabraAdivinada}</p> //se pasa por parametro a la palabra elegida
        )
    };
}

export default Palabra;