import * as Phaser from "phaser";

//hi Oleg! are you gay?
//no
export default class Preloader extends Phaser.Scene {
  constructor() {
    super("Preloader");


  }

  async preload(){
    await this.load.multiatlas("assets", "assets/assets.json", "assets")
  }

  create(){
    this.scene.start("TestField");
  }

  update(time, delta) {
    super.update(time, delta);
  }
}