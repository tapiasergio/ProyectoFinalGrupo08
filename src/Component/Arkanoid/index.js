import Phaser from "phaser";
import { Game } from "./Scene/game";
import { Gameover } from "./Scene/gameOver";
import { Start } from "./Scene/start";
import React, { useEffect } from "react";
import { useState } from "react";


export default function Juego() {
    const [start, setStart] = useState(false);
    
    useEffect(() => {
        const config = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            physics: {
                default: 'arcade',
                arcade: {
                    debug: false
                    //gravity: {y: 100}
                }
            },
            parent: 'game',
            scene: [Start, Game, Gameover]
        }

        var game = new Phaser.Game(config);
        
        return () => {
            setStart(false);
            game.destroy(true);
            
        }
    }, [start]);
    return (
        <div id='game' className='text-center'></div>
        
    );
}
