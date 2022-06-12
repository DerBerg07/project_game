import * as Phaser from "phaser";

export default class TestField extends Phaser.Scene {
  constructor(config) {
    super(config);
  }

  preload () {
    this.objects = {};
  }

  create(){
    this.objects.camera = this.cameras.add(0, 0, 400, 300);
    this.objects.camera.setBackgroundColor('rgba(255, 0, 0, 0.5)');
  }

  update(time, delta) {
    super.update(time, delta);
  }
}