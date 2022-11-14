/**
 * CLASE QUE GESTIONA EL ORDEN DE INICIO DE LAS FASES (GENERADOR DE NIVELES)
 */
import { Phase1 } from './Phase1.js'
import { Phase2 } from './Phase2.js'
import { Phase3 } from './Phase3.js';

export class PhaseConstructor{
    /**
     * RESUME LAS TAREAS DE INICIALIZACION DE LOS OBJETOS
     */
    constructor(scene){
        this.relatedScene = scene;
        this.phases = [ //ARRAY DE ESCENAS-->EN ELLAS SE ALMACENARAN TODAS LAS ESCENAS QUE SE UTILIZAN EN EL JUEGO
             Phase3, 
             Phase2,  
             Phase1  
        ];  
    }

    /**creo el nivel */
    create(){
        let CurrentPhaseClass = this.phases.pop(); // EL METODO POP LLAMA AL ULTIMO ELEMENTO DEL ARREGLO EN ESTE CASO EL ULTIMO ELEMENTO SERA LA PRIMERA ESCENA 
        this.currentPhase = new CurrentPhaseClass(this.relatedScene);
        return this.currentPhase.create();//RETORNA EL METODO CREATE DE LA PRIMERA ESCENA
    }

    /**actualiza el nivel */
    update(){
        return this.currentPhase.update();//RETORNA EL METODO UPDATE DE LA PRIMERA ESCENA
    }

    /**cambio de nivel */
    nextLevel(){
         this.currentPhase.deleteFixedZombies(); //BORRA LOS ENEMIGOS DEL LA ESCENA
        if(this.phases.length == 0){//CUANDO EL TAMAÑO DEL ARRAY SEA IGUAL A 0 SE LLAMA AL METODO ENDGAME PARA FINALIZAR EL JUEGO
            this.relatedScene.endGame(true);
        }else{
            return this.create();//SI EL TAMAÑO DE LA ESCENA ES DISTINTO A 0 LLAMA AL METODO CREATE DE LA SIGUIENTE ESCENA
        }
    }
}