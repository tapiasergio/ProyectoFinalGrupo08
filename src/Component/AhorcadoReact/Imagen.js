import React, {Component} from "react";

class Imagen extends Component{
    constructor(props){
        super(props);
        this.getNombreImagen = this.getNombreImagen.bind(this);
    }

    getNombreImagen(){
        return "ImgAhorcado/"+this.props.numFallos+".jpg";
    }

    render(){
        return(
            <div className = "text-center">
            <img src={this.getNombreImagen()} alt="AHORCADO" style={{ width: '40%' }} />
            </div>
        );
    }
}

export default Imagen;