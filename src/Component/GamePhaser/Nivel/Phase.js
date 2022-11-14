export class Phase {
  constructor(scene) {//recibe la escena donde lo vamos a usar, guardando una referencia en el constructor
    this.relatedScene = scene;
  }

  configureColisions() {
    this.relatedScene.physics.add.collider(this.cheem, this.groundBottom, null, null, null);
  }

  configureColisionsZombi() {
    this.relatedScene.physics.add.collider(this.cheem, this.zombies, this.relatedScene.zombieImpact, null, this.relatedScene);
  }

  configureColisionsMina() {
    this.relatedScene.physics.add.collider(this.cheem, this.minas, this.relatedScene.minaImpact, null, this.relatedScene);
  }

  configureColisionsObstacule() {
    this.relatedScene.physics.add.collider(this.cheem, this.plataformas, this.relatedScene.obstaculoImpact, null, this.relatedScene);
  }

  colisionsCofre() {
    this.relatedScene.physics.add.collider(this.cheem, this.cofre1, this.relatedScene.cofreImpact, null, this.relatedScene);
  }
  colisionsMuroFixed() {
    this.relatedScene.physics.add.collider(this.relatedScene.chems, this.Muro, this, this.relatedScene.MuroImpact, null, this.relatedScene);
  }

  deleteFixedZombies() {
    if (this.zombies) {
      this.zombies.getChildren().forEach(item => {
        item.disableBody(true, true);
      })
    }
  }

}