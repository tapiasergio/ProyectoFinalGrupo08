import Phaser from "phaser";
import { Congratulations } from "./Scene/Congratulations";
import { Game } from "./Scene/Game";
import { Over } from "./Scene/Over";
import { Start } from "./Scene/Start";

const config = {//ESTABLECE LA CONFIGURACION DEL JUEGO
    type: Phaser.AUTO, //INDICA QUE PHASER PODRA USAR CANVAS, DEPENDIENDO SI EL NAVEGADOR SEA O NO COMPATIBLE
    width: 900,//ANCHO DE LA PANTALLA DEL JUEGO
    height: 600,//ALTURA DE LA PANTALLA DEL JUEGO
    physics:{//FIUSICA DEL JUEGO 
        default: 'arcade',
        arcade:{
            debug: false
        }
    },
    scene: [Start,Game,Over, Congratulations]//ESCENA DEL JUEGO
}

var game = new Phaser.Game(config);//VARIABLE QUE CONTIENE LA CONFIGURACIO DEL JUEGO
export default game;