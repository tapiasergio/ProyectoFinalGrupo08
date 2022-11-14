import { Phase } from './Phase.js'
import { zombieList2 } from './objetosn3/Enemigos3.js';
import { minaList } from './objetosn3/Mina.js';
import { zombie2List2 } from './objetosn3/Enemigos3.js';
import { plataformaList3 } from './objetosn3/Plataformas3.js';

export class Phase3 extends Phase{
   
    create() {
     
        /**nivel */
        this.nivel3 = this.relatedScene.physics.add.image(500, 465, 'nivel3'); 
        this.nivel3.setScale(4, 4); 
        /**cheem */
        this.cheem = this.relatedScene.physics.add.image(50, 320, 'chemSub');
        this.cheem.setData('chemSub', true);
        this.cheem.setCollideWorldBounds(true);
        this.cheem.setBounce(0.1);
        this.cheem.body.gravity.y = -500;
        /**piso */
        this.groundBottom = this.relatedScene.physics.add.image(5, 595, 'groundBottom').setOrigin(0, 1).setImmovable(true);
        /**zombie */
        this.zombies = this.relatedScene.physics.add.group();
        this.minas = this.relatedScene.physics.add.group();
        /**plataforma */
        this.plataformas = this.relatedScene.physics.add.group();//obstaculo
        /**movimiento */
        this.cursor = this.relatedScene.input.keyboard.createCursorKeys();
        /**cofre */
        this.cofre1 = this.relatedScene.physics.add.image(25.5 * 700, 150, 'cofre');//en la plataforma 49 deve ir el cofre
        this.cofre1.body.velocity.x = -550;

        this.colisionsCofre();
        this.ListaMinas();
        this.configureColisionsMina();
        this.configureColisions();
    }

    update() {
        this.move();
    }

    move() {
        if (this.cursor.left.isDown) {
            this.cheem.setVelocityX(-300);
        } else if (this.cursor.right.isDown) {
            this.cheem.setVelocityX(300);
        } else if (this.cursor.up.isDown) {
            this.cheem.setVelocityY(-500);
        } else if(this.cursor.down.isDown)
        {
            this.cheem.setVelocityY(500);
        }else{
            this.cheem.setVelocityX(0);
        }
    }
    ListaZombie2() {
        for (let zombie2 of zombie2List2) {
            let positionX = 6;
            let zombie2Y = zombie2.y;
            for (let i = 0; i < zombie2.quantity; i++) {
                let zombie2Aux = this.zombies.create((zombie2.seconds * 700) + positionX, zombie2Y, 'zombie2').setOrigin(0).setImmovable(true);
                zombie2Y -= zombie2Aux.width;
            }
        }
        this.zombies.setVelocityX(-550);
    }

     ListaZombie1() {
        for (let zombie of zombieList2) {
            let posicion = 6;
            for (let i = 0; i < zombie.quantity; i++) {
                let zombieAux = this.zombies.create((zombie.seconds * 700) + posicion, zombie.y, 'zombie').setOrigin(0, 1).setImmovable(true);
                posicion += zombieAux.width;
            }
        }
        this.zombies.setVelocityX(-550);
    }

    ListaPlataforma() {
        for (let plataform of plataformaList3) {
            let posicionX = 6;
            for (let i = 0; i < plataform.quantity; i++) {
                let plataformAux = this.plataformas.create((plataform.seconds * 700) + posicionX, plataform.y, 'plataform').setOrigin(0, 1).setImmovable(true);
                posicionX += plataformAux.width;

            }
        }
        this.plataformas.setVelocityX(-550);
    } 
    ListaMinas(){
        for(let mina of minaList){
            let positionX = 6;
            let minaY = mina.y;
            for (let i = 0; i < mina.quantity; i++) {
                let minaAux = this.minas.create((mina.seconds * 700) + positionX, minaY, 'mina').setOrigin(0).setImmovable(true);
                minaY -= minaAux.width;
            }
        }
        this.minas.setVelocityX(-400);
    }

}