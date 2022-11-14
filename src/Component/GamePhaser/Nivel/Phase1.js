/**
 * PRIMER NIVEL DEL JUEGO
 */
import { Phase } from "./Phase.js";
import { zombieList } from "./objetosn1/Enemigos";
import { plataformaList } from "./objetosn1/Plataformas.js";

export class Phase1 extends Phase {

    init() {
    }

    /**
     * REALIZA TAREAS DE INICIALIZACION QUE SE DEBEN EJECUTAR CADA VEZ QUE 
     * LA ESCENA SE PONE EN MARCHA
     */
    create() {

        /**nivel */
        this.nivel1 = this.relatedScene.physics.add.image(400, 300, 'nivel1');//FONDO DEL JUEGO

        /**cheem */
        this.cheem = this.relatedScene.physics.add.image(50, 320, 'cheem');//PERSONAJE


        this.cheem.setCollideWorldBounds(true);//ACTIVA LA COLICION CON LOS BORDES DE PANTALLA
        this.cheem.setBounce(0.1);//FUERZA DE REBOTE DEL PERSONAJE
        this.cheem.body.gravity.y = 4000;//AGREGA LA PESO AL PERSJANE

        /**piso */
        this.groundBottom = this.relatedScene.physics.add.image(5, 595, 'groundBottom').setOrigin(0, 1).setImmovable(true);//SE CREA LA PLATAFORMA

        /**zombie */
        this.zombies = this.relatedScene.physics.add.group();//SE CREA EL GRUPO PARA ALMACENAR LOS ENEMIGOS

        /**plataforma */
        this.plataformas = this.relatedScene.physics.add.group();//SE CREA EL GRUPO PARA ALMACENAR LAS PLATAFORMAS
       
        /**movimiento */
        this.cursor = this.relatedScene.input.keyboard.createCursorKeys();
       
        /*cofre de victoria */
        this.cofre1 = this.relatedScene.physics.add.image(15 * 700, 420, 'cofre').setOrigin(0.1); //en la plataforma 49 deve ir el cofre
        this.cofre1.body.velocity.x = -550;
        
        /**configuracion de colisiones */
        this.colisionsCofre();
        this.configureColisions();
        this.configureColisionsZombi();
        this.configureColisionsObstacule();

        /**configuracion de enemigos  */
        this.ListaZombie1();
        this.ListaPlataforma();
    }

    /**
     * PRECARGA LOS ARCHIVOS QUE SE REQUIERAN PARA ESTA ESCENA
     */
    update() {
        this.move();
    }

    /**
     * MOVIMIENTO DEL PERSONAJE
     */
    move() {
        if (this.cursor.left.isDown) {//MOVIMIENTO A LA IZQUIERDA
            this.cheem.setVelocityX(-300);
        } else if (this.cursor.right.isDown) {//MOVIMIENTO A LA DERECHA
            this.cheem.setVelocityX(300);
        } else if (this.cursor.space.isDown) {//SALTO
            this.cheem.setVelocityY(-500);
        } else {
            this.cheem.setVelocityX(0);//CUANDO NO SE APRIETA NINGUNA TECLA SE QUEDA QUIETO
        }
    }

    ListaZombie1() {
        for (let zombie of zombieList) {
            let posicion = 6;
            for (let i = 0; i < zombie.quantity; i++) {
                let zombieAux = this.zombies.create((zombie.seconds * 700) + posicion, zombie.y, 'zombie').setOrigin(0, 1).setImmovable(true);
                posicion += zombieAux.width;
            }
        }
        this.zombies.setVelocityX(-550);
    }
    
    ListaPlataforma() {
        for (let plataform of plataformaList) {
            let posicionX = 6;
            for (let i = 0; i < plataform.quantity; i++) {
                let plataformAux = this.plataformas.create((plataform.seconds * 700) + posicionX, plataform.y, 'plataform').setOrigin(0, 1).setImmovable(true);
                posicionX += plataformAux.width;

            }
        }
        this.plataformas.setVelocityX(-550);
    }

    setInitialPlatformState() {

        this.chems.x = 50;
        this.chems.y = 320;

    }
}