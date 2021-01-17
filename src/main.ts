import Phaser from "phaser";

import MyGame from "./scenes/BaseScene";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  physics: {
    default: "matter",
    matter: {
      gravity: { y: 0 },
      // debug: {
      //   showBody: false,
      // },
      debug: false,
    },
  },
  scene: [MyGame],
};

export default new Phaser.Game(config);
