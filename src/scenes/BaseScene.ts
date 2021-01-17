import Phaser from "phaser";

// export default class HelloWorldScene extends Phaser.Scene
// {
// 	constructor()
// 	{
// 		super('hello-world')
// 	}

// 	preload()
//     {
//         this.load.setBaseURL('http://labs.phaser.io')

//         this.load.image('sky', 'assets/skies/space3.png')
//         this.load.image('logo', 'assets/sprites/phaser3-logo.png')
//         this.load.image('red', 'assets/particles/red.png')
//     }

//     create()
//     {
//         this.add.image(400, 300, 'sky')

//         const particles = this.add.particles('red')

//         const emitter = particles.createEmitter({
//             speed: 100,
//             scale: { start: 1, end: 0 },
//             blendMode: 'ADD'
//         })

//         const logo = this.physics.add.image(400, 100, 'logo')

//         logo.setVelocity(100, 200)
//         logo.setBounce(1, 1)
//         logo.setCollideWorldBounds(true)

//         emitter.startFollow(logo)
//     }
// }
// let player;
let controls;
let cursors;

let keyE;
let keyS;
let keyD;
let keyF;

export default class MyGame extends Phaser.Scene {
  // private cursors
  private player!: Phaser.Physics.Matter.Sprite;

  constructor() {
    super("MyGame");
    // this.player = this.physics.add.staticImage();
  }

  preload() {
    this.load.tilemapTiledJSON(
      "tileData",
      "./assets/tilemaps/pokemon-map-data.json"
    );
    this.load.image(
      "tileImg",
      "./assets/tilesets/tuxmon-sample-32px-extruded.png"
    );
  }

  create() {
    const map = this.make.tilemap({
      key: "tileData",
    });

    const tileset = map.addTilesetImage("pokemon-out", "tileImg");

    const worldLayer = map.createLayer("world", tileset, 0, 0);
    worldLayer.setCollisionByProperty({ collides: true });

    this.matter.world.convertTilemapLayer(worldLayer);
    this.player = this.matter.add
      .sprite(200, 200, "cool")
      .setFixedRotation()
      .setMass(50);
    // player = this.matter.add.circle(200,200, 50);

    // this.matter.world.createDebugGraphic();
    // const debugGraphics = this.add.graphics().setAlpha(0.75);
    // worldLayer.renderDebug(debugGraphics, {
    //   tileColor: null, // Color of non-colliding tiles
    //   collidingTileColor: new Phaser.Display.Color(0, 255, 0, 128), // Color of colliding tiles
    //   faceColor: new Phaser.Display.Color(40, 39, 37, 255), // Color of colliding face edges
    // });

    // cursors = this.input.keyboard.createCursorKeys();

    keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
    keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);

    //   controls = new Phaser.Cameras.Controls.FixedKeyControl({
    //   // camera: camera,
    //   left: cursors.left,
    //   right: cursors.right,
    //   up: cursors.up,
    //   down: cursors.down,
    //   speed: 0.5
    // });
  }

  update() {
    const speed = 5;

    // console.log(this.player.getCenter())
    this.player.setVelocity(0);

    const playerPos = this.player.getCenter();
    if (keyE.isDown) {
      // this.player.setVelocity(0);

      this.player.setVelocityY(-speed);
    } else if (keyS.isDown) {
      // this.player.setVelocity(0);

      this.player.setVelocityX(-speed);
    } else if (keyD.isDown) {
      // this.player.setVelocity(0);

      this.player.setVelocityY(speed);
    } else if (keyF.isDown) {
      // this.player.setVelocity(0);

      this.player.setVelocityX(speed);
    } else {
      // this.player.setVelocity(0);
    }
  }
}
