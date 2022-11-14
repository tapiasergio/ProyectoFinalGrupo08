import Phaser from "phaser";
import { StartButton } from "../Component/ButtonPlay";

export class Start extends Phaser.Scene {
    constructor() {
        super({ key: 'start' });
        this.startButton = new StartButton(this);
        /*   this.botonN1 = new Boton1(this); */
    }


    preload() {

        this.load.image('start', 'assets/menu.png');
        this.load.image('titulo', 'assets/nombre.png')
        this.startButton.preload();
    }

    create() {
        this.startImage = this.add.image(0,0, 'start').setOrigin(0);
        
        this.titulo = this.add.image(0,100, 'titulo').setOrigin(0);
        
        this.startButton.create();
        /*  this.botonN1.create(); */
    }
}