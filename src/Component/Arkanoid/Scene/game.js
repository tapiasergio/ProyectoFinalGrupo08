import Phaser from "phaser";
import { PhaseConstructor } from "../Component/phase-constructor";

export class Game extends Phaser.Scene{
    constructor(){
        super({key:'game'});
    }

    init(){
        this.phaseConstructor = new PhaseConstructor(this);
    }

    preload(){
        this.load.image('nivel1','assets/LEVEL1.jpg');
        this.load.image('nivel2','assets/LEVEL2.jpg');
        this.load.image('paddle','assets/paddle.png');
        this.load.image('ball','assets/ball.png');
        this.load.image('brick1','assets/brick1.png');
        this.load.image('brick2','assets/brick2.png');
        this.load.image('brick3','assets/brick3.png');
    }

    create(){
        this.phaseConstructor.create();
    }

    update(){
        this.phaseConstructor.update();
    }
    
    platformImpact(ball,paddle){
        let relativeImpact = ball.x - paddle.x;
        if(relativeImpact > 0){
            ball.setVelocityX(10 * relativeImpact);
        }else if(relativeImpact < 0){
            ball.setVelocityX(10 * relativeImpact);
        }else{
            ball.setVelocityX(Phaser.Math.Between(-10,10));
        }
    }

    brickImpact(ball, brick){
        brick.disableBody(true,true);
        if(this.phaseConstructor.isPhaseFinished()){
            this.phaseConstructor.nextLevel();
        }
        /*let pase = true;
        if(this.phaseConstructor.phases == 0){
            console.log("finalizado");
        }else{
            if(pase == true){
                pase = false;
                this.phaseConstructor.nextLevel();
            }
        }*/
    }    

    impactBall(paddle, ball){
        this.physics.add.collider(paddle, ball, null, null);
    }

    endGame(completed = false){
        if(!completed){
            this.scene.start('gameover');
        }else{
            console.log("...");
        }
    }
}