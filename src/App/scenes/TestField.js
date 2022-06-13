import * as Phaser from "phaser";

export default class TestField extends Phaser.Scene {
  constructor() {
    super("TestField");
  }

  preload () {
    this.objects = {};
  }

  create(){
    this.objects.camera = this.cameras.add(0, 0, 400, 300);
    this.objects.camera.setBackgroundColor('rgba(255, 0, 0, 0.5)');
    console.log(this.textures);
    const player  = this.add.sprite(30, 30, "assets", "heroes/test_hero/01.png");
    const frameNames = this.anims.generateFrameNames('assets', {
      start: 1, end: 2, zeroPad: 2,
      prefix: 'heroes/test_hero/', suffix: '.png'
    });
    this.anims.create({ key: 'walk', frames: frameNames, frameRate: 10, repeat: -1 });
    player.anims.play('walk');
  }

  update(time, delta) {
    super.update(time, delta);
  }
}