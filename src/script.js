import Preloader from "./App/scenes/Preloader";
import TestField from "./App/scenes/TestField";
import * as Phaser from "phaser";

const gameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  pixelArt: true,
  parent: 'game',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: 'arcade',
  },
  scene: [
      Preloader,
      TestField
    
  ]
}

const app = new Phaser.Game(gameConfig)

