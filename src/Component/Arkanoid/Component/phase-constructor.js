import { Phase1 } from "./phase1";
import { Phase2 } from "./phase2";

export class PhaseConstructor{
    constructor(scene){
        this.relatedScene = scene;
        this.phases = [
            Phase2,
            Phase1
        ];
    }

    create(){
        let CurrenPhaseClass = this.phases.pop();
        this.CurrenLevel = new CurrenPhaseClass(this.relatedScene);
        return this.CurrenLevel.create();
    }

    update(){
        return this.CurrenLevel.update();
    }

    nextLevel(){
        this.CurrenLevel.deleteFixedBricks();
        if(this.phases.length === 0){
            this.relatedScene.endGame(true);
            
        }else{
            return this.create();
        }
    }

    
    isPhaseFinished(){
        return this.CurrenLevel.isPhaseFinished();
    }
}