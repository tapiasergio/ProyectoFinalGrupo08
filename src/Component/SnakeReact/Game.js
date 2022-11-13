import { tamanioLienzo, snakeComienzo, manzanaComienzo, escala, velocidad, direcciones } from "./Constantes";
import { useInterval } from "./useInterval";
import React, { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";

function Game(){
    const canvasRef = useRef();
    const[snake, setSnake] = useState(snakeComienzo);
    const[manzana, setManzana] = useState(manzanaComienzo);
    const[direccion, setDireccion] = useState([0, -1]);
    const[speed, setSpeed] = useState(null);
    const[gameOver, setGameOver] = useState(false);
    const[puntaje, setPuntaje] = useState(0)

    useInterval(() => gameLoop(), speed);

    function endGame(){
        setSpeed(null);
        setGameOver(true);
    };

    function moveSnake({keyCode}){
        keyCode >= 37 && keyCode <= 40 && setDireccion(direcciones[keyCode]);
    }

    const crearManzana = () =>
        manzana.map((_a, i) => Math.floor(Math.random()* (tamanioLienzo[i]/escala)));
    

    const colision = (pieza, snk = snake) => {
        if (pieza[0] * escala >= tamanioLienzo[0] || pieza[0] < 0 || pieza[1] * escala >= tamanioLienzo[1] || pieza[1] < 0){
            return true;
        }
        for (const segment of snk) {
          if (pieza[0] === segment[0] && pieza[1] === segment[1]) return true;
        }
        return false;
      };

    const comerManzana = newSnake => {
        if(newSnake[0][0] === manzana[0] && newSnake[0][1] === manzana[1]){
            let newManzana = crearManzana();
            while(colision(newManzana, newSnake)){
                newManzana = crearManzana();
                setPuntaje(newPuntaje);
            }
            let newPuntaje = puntaje + 1;
            setPuntaje(newPuntaje)
            setManzana(newManzana);
            return true;
        }
        return false;
    };

    function gameLoop(){
        const copiaSnake = JSON.parse(JSON.stringify(snake));
        const newSnakeCabeza = [copiaSnake[0][0] + direccion[0], copiaSnake[0][1] + direccion[1]];
        copiaSnake.unshift(newSnakeCabeza);
        if(colision(newSnakeCabeza)){
            endGame();
        }
        if(!comerManzana(copiaSnake)){
            copiaSnake.pop();
        }
        setSnake(copiaSnake);
    }

    function startGame(){
        setSnake(snakeComienzo);
        setManzana(manzanaComienzo);
        setDireccion([0, -1]);
        setSpeed(velocidad);
        setGameOver(false);
        setPuntaje(0)
    };

    useEffect(() => {
        const context = canvasRef.current.getContext("2d");
        context.setTransform(escala, 0, 0, escala, 0, 0);
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        context.fillStyle = "green";
        snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1));
        context.fillStyle = "red";
        context.fillRect(manzana[0], manzana[1], 1, 1);
    }, [snake, manzana, gameOver]);

    return (
        <div role="button" tabIndex="0" onKeyDown={e => moveSnake(e)} className="text-center">
          <div className="text-center">Puntaje:
            {" "+ puntaje}
          </div> 
          <canvas
            style={{ border: "1px solid black" }}
            ref={canvasRef}
            width={`${tamanioLienzo[0]}px`}
            height={`${tamanioLienzo[1]}px`}
          />
          <div className="text-center">
            {gameOver && <strong>GAME OVER! 
                <div>Su Puntaje Final:
                {" " + puntaje}
                </div>
            </strong>}
            <Button onClick={startGame} variant="success">Jugar</Button>
          </div>
        </div>
    );

};

export default Game;