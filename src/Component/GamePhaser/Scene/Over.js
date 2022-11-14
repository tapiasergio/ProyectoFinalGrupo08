import { RestartButton } from "../Component/ButtonRePlay";
import Phaser from "phaser";
export class Over extends Phaser.Scene{
    constructor() {
        super({ key: 'gameover' });
        this.RestartButton = new RestartButton(this);
      }
    
      preload() {
        this.load.image('gameover', 'assets/Gameover.png');
        this.RestartButton.preload();
      }
      
      create() {
        this.add.image(100, 50, 'background');
       
        this.gameoverImage = this.add.image(400, 300, 'gameover');
        this.RestartButton.create();
        
      }
}