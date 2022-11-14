
import Phaser from "phaser";
import { PhaseConstructor } from "../Nivel/Phase-Constructor";
export class Game extends Phaser.Scene {
    /**
     * RESUME LAS TAREAS DE INICIALIZACION DE LOS OBJETOS
     */
    constructor() {
        super({ key: 'game' });//NOMBRE DE LA ESCENA
    }

    /**
     * REALIZA TAREAS DE INICIALIZACION QUE SE DEBEN EJECUTAR CADA VEZ QUE 
     * LA ESCENA SE PONE EN MARCHA
     */
    init() {
        this.PhaseConstructor = new PhaseConstructor(this);//INICIALIZAMOS EL CONSTRUCTOR DE ESCENA
    }

    /**
     * PRECARGA LOS ARCHIVOS QUE SE REQUIERAN PARA ESTA ESCENA
     */
    preload() {
        this.load.image('cheem', 'assets/image.png');
        this.load.image('cheemCopt', 'assets/helicoptero.png');
        this.load.image('chemSub', 'assets/submarino.png');
        this.load.image('groundBottom', 'assets/groundBottom.png');
        this.load.image('zombie', 'assets/zombie.png');
        this.load.image('zombie2', 'assets/zombie2.png');
        this.load.image('plataform', 'assets/plataforma.png');
        this.load.image('portalCopt', 'assets/portalFlap.png');
        this.load.image('nivel1', 'assets/nivel1.png');
        this.load.image('nivel2', 'assets/nivel2.png');
        this.load.image('nivel3', 'assets/nivel3.png');
        this.load.image('cofre', 'assets/cofre.png');
        this.load.image('mina', 'assets/MinaAcuatica.png');
    }

    /**
     * SIRVE PARA COMPONER TODO EL ESCENARIO Y LOS ACTORES QUE FORMAN PARTE DEL JUEGO
     */
    create() {
        this.PhaseConstructor.create();//LLAMAMOS AL METODO CREATE DE LA CLASE CONSTRUCTOR
    }

    /**
     * EN ESTE METODO SE EJECUTA CONSTANTEMENTE Y NOS PERMITE ESPECIFICAR EL CODIGO QUE SE DEBE ESTAR PENDIENTE 
     * DE LAS ACCIONES DEL USUARIO
     */
    update() {
        this.PhaseConstructor.update();//LLAMAMOS AL METODO UPDATE DE LA CLASE CONSTRUCTOR
    }

    /**
     * COLICION DEL PERSONAJE CON EL OBSTACULO 
     */
    obstaculoImpact(cheem, obstaculo) {
        this.physics.add.collider(cheem, obstaculo, null, null);
    }

    /**
     * METODO QUE FINALIZA EL JUEGO, SI COMPLETO LA ESCENA
     * REDIRIGE A LA ESCENA DE CONGRATULATIONS, SINO
     * REDIRIGE A LA ESCENA DE GAMEOVER
     */
    endGame(completed = false) {
        if (!completed) {
            this.scene.start('gameover');//CAMBIA DE ESCENA
        } else {
            this.scene.start('congratulations');//CAMBIA DE ESCENA
        }
    }

    /**
     * METODO DE COLICION ENTRE EL JUGADOR Y EL COFRE
     *  
     */
    cofreImpact(cheem, cofre) {
        cofre.disableBody(true, true);//CUANDO COLISIONA EL COFRE DESAPARECE
        let pase = true;
        if (this.PhaseConstructor.phases == 0) {//SI EL TAMAÑO DEL ARREGLO ES IGUAL A 0 SIGNIFICA QUE LLEGO HASTA EL FINAL
            this.scene.start("congratulations");//INICIA LA ESCENA DE CONGRATULATIONS
        } else {
            if (pase == true) {
                pase = false;
                this.PhaseConstructor.nextLevel();//CAMBIA AL SIGUIENTE NIVEL
            }

        }
    }

    /**
     * METODO DE COLCION ENTRE EL JUGADOR Y EL ENEMIGO (ZOMBI)
     */
    zombieImpact(cheem, zombie) {
        cheem.disableBody(true, true);//DESAPARECE EL JUGADOR
        this.scene.start('gameover');//INICIA LA ESCENA GAMEOVER
    }

    /**
     * METODO DE COLICION ENTRE EL JUGADOR Y EL ENEMIGO(MINAS)
     */
    minaImpact(cheem, mina) {
        cheem.disableBody(true, true);//DESAPARECE EL JUGADOR
        this.scene.start('gameover');//INICIA LA ESCENA GAMEOVER
    }
}