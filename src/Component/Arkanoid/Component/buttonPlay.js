export class StartButton{
    constructor(scene){
        this.relatedScene = scene;
    }

    preload(){
        this.relatedScene.load.image('btnStart','assets/play.png')
    }

    create(){
        this.btn = this.relatedScene.add.image(400,450,'btnStart').setInteractive();
        this.btn.on('pointerover',() => {
            this.btn.setFrame(1);
        });
        this.btn.on('pointerout',() => {
            this.btn.setFrame(0);
        });
        this.btn.on('pointerdown', ()=> {
            this.relatedScene.scene.start('game');
        });
    }
}