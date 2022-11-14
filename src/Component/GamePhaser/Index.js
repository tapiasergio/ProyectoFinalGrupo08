import Phaser from "phaser";
import { Congratulations } from "./Scene/Congratulations";
import { Game } from "./Scene/Game";
import { Over } from "./Scene/Over";
import { Start } from "./Scene/Start";
import React, { useEffect } from "react";
import { useState } from "react";

export default function Juego() {
    const [start, setStart] = useState(false);
    useEffect(() => {
        const config = {//ESTABLECE LA CONFIGURACION DEL JUEGO
            type: Phaser.AUTO, //INDICA QUE PHASER PODRA USAR CANVAS, DEPENDIENDO SI EL NAVEGADOR SEA O NO COMPATIBLE
            width: 900,//ANCHO DE LA PANTALLA DEL JUEGO
            height: 600,//ALTURA DE LA PANTALLA DEL JUEGO
            physics: {//FISICA DEL JUEGO 
                default: 'arcade',
                arcade: {
                    debug: false
                }
            },
            parent: 'game',
            scene: [Start, Game, Over, Congratulations]//ESCENA DEL JUEGO
        }

        var game = new Phaser.Game(config);//VARIABLE QUE CONTIENE LA CONFIGURACIO DEL JUEGO
        return () => {
            setStart(false);
            game.destroy(true);
        }

    },[start]);
    return (
        <div id='game' className='text-center'></div>
    );
}