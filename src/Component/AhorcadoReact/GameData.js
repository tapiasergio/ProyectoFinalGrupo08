import React from 'react';
import Card from 'react-bootstrap';
import Letters from '../../LettersData.json';

const gameData = () => {
    var indice = 0;
    Letters.forEach(element => {
        if(element.id === 1){
            indice = element.letter;
        }
    },
        console.log(indice.toString())
    );

    var titulo = Letters.findIndex(0);
    return (
        <h1>titulo</h1>
    );
}

export default gameData;