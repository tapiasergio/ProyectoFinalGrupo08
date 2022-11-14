import Phaser from "phaser";
export class Phase{
    constructor(scene){
        this.relatedScene = scene;
    }

    configureColisions(){
        this.relatedScene.physics.world.setBoundsCollision(true,true,true,false);
        
    }
    configureImpactBall(){
        this.relatedScene.physics.add.collider(this.ball, this.paddle, this.relatedScene.impactBall, null, this.relatedScene);
    }

    configureImpactBrick(){
        this.relatedScene.physics.add.collider(this.ball, this.bricks, this.relatedScene.brickImpact, null, this.relatedScene);
    }

    deleteFixedBricks(){
        if(this.bricks){
            this.bricks.getChildren().forEach(item => {
                item.disableBody(true, true);
            })
        }
    }
    
    isPhaseFinished(){
        return (this.bricks.countActive() === 0);
    }
}