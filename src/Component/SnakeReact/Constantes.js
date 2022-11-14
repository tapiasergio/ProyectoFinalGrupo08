//En este archivo js se van a definir constantes
const tamanioLienzo = [800, 480];
const manzanaComienzo = [12, 10]; //Ubicación de la primera manzana dentro del juego
const snakeComienzo = [
    [12, 20]
]; //Ubicación del snake dentro del juego

const escala = 20; //Tamaño de los objetos dentro del juego
const velocidad = 80; //Velocidad del snake
const direcciones = 
{
    38: [0, -1], // arriba
    40: [0, 1], // abajo
    37: [-1, 0], // izquierda
    39: [1, 0] // derecha
}; //Direcciones del snake utilizando teclas definidas

export
{
    tamanioLienzo,
    snakeComienzo,
    manzanaComienzo,
    escala,
    velocidad,
    direcciones,
}

