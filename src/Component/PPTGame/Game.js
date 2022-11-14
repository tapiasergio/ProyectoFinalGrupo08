import Button from 'react-bootstrap/Button';
import Imagen from 'react-bootstrap/Image';
import Pregunta from './Img/pregunta.png';
import imgData from "./Img/ImgData";
import Players from './PlayerData';
import './style.css';


function randomImg(){
    var index1 = Math.round(Math.random() * (2-0));
    var index2 = Math.round(Math.random() * (2-0));
    document.getElementById("id1").setAttribute('src',imgData[index1].src);
    document.getElementById("id2").setAttribute('src',imgData[index2].src);
    
    comparar(imgData[index1].id,imgData[index2].id);
}

function comparar(a,b){
    Players[0].opcion = a;
    Players[1].opcion = b;
    if(a === b){
        console.log("empate");
        alert("empate");
    }else{
        if((a+b) % 2 === 0){//gana piedra
            if(Players[0].opcion === 3){
                Players[0].puntaje+=1;
                //console.log("gana jugador 1"+"-Puntaje: "+Players[0].puntaje++);
                alert("El jugador 1 gana" + " // Puntaje Jugador 1: " + Players[0].puntaje + " // Puntaje Jugador 2: " + Players[1].puntaje);
            }else{
                //console.log("gana jugador 2"+"-Puntaje: "+Players[1].puntaje++);
                Players[1].puntaje+=1;
                alert("El jugador 2 gana" + " // Puntaje Jugador 1: " + Players[0].puntaje + "// Puntaje Jugador 2: " + Players[1].puntaje);
            }
        }else if((a+b) % 2 === 1){ //gana tijera o gana papel
            if(Players[0].opcion === 1 || Players[0].opcion === 3){
                //console.log("gana jugador 1"+"-Puntaje: "+Players[0].puntaje++);
                Players[0].puntaje+=1;
                alert("El jugador 1 gana" + " // Puntaje Jugador 1: " + Players[0].puntaje + " // Puntaje Jugador 2: " + Players[1].puntaje);
            }else{
                //console.log("gana jugador 2"+"-Puntaje: "+Players[1].puntaje++);
                Players[1].puntaje+=1;
                alert("El jugador 2 gana" + " // Puntaje Jugador 1: " + Players[0].puntaje + " // Puntaje Jugador 2: " + Players[1].puntaje);
            }
        }
    }

}


const Numbers = () => {

    return(
        <>
            <div className='estilo2'>
                <h1 id='auxiliar'>{Players[0].name}</h1>
                <h1 >{Players[1].name}</h1>
            </div>

            <div className='estilo'>

                <Imagen id="id1" src={Pregunta} style={{width: '20%'}}/>

                <Button onClick={ randomImg } variant="outline-primary">Gerar Número</Button>{''}
                <Imagen id="id2" src={Pregunta} style={{width: '20%'}}/>

            </div>

        </>
    );


}

export default Numbers;