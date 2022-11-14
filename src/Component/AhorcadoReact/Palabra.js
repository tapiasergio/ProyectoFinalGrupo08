import React, {Component} from "react";
import "./style.css";

class Palabra extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
        <p id="palabra">{this.props.palabraAdivinada}</p> //se pasa por parametro a la palabra elegida
        )
    };
}

export default Palabra;