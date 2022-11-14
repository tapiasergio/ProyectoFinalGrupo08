import Phaser from "phaser"
import { StartButton } from "../Component/buttonPlay";

export class Start extends Phaser.Scene {
   constructor(){
       super({key:'start'});
       this.StartButton = new StartButton(this);
   }

   preload(){
       // load your assets here...
       this.load.image('start', 'assets/INICIO01.jpg');
       this.StartButton.preload();
   }

   create(){
       // create anime script here...
       this.start = this.add.image(400,300,'start');
       this.StartButton.create();
   }

}