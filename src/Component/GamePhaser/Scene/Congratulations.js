import { RestartButton } from "../Component/ButtonRePlay";

RestartButton

export class Congratulations extends Phaser.Scene {
  constructor() {
    super({ key: 'congratulations' });
    this.restartButton = new RestartButton(this);
  }

  preload() {
    this.load.image('congratulations', 'assets/final.jpg');
    this.restartButton.preload();
  }
  
  create() {
    this.add.image(410, 250, 'background');
   
    this.congratsImage = this.add.image(400, 280, 'congratulations');
    this.restartButton.create();
  }
}