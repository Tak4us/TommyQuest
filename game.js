var dot;
var cursors;

function create() {
    // Create a simple dot
    dot = this.add.circle(400, 100, 10, 0x0000ff); 

    // Enable physics on the dot and make it react to gravity
    this.physics.add.existing(dot);
    dot.body.setCollideWorldBounds(true);
    dot.body.setGravityY(300); // Optionally set individual gravity for the dot
    var ground = this.add.rectangle(400, 580, 800, 40, 0x00ff00);
    this.physics.add.existing(ground, true); // 'true' makes it static
    this.physics.add.collider(dot, ground);
    cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    if (!cursors) {
        return; // Exit the function if cursors is not defined
    }
    dot.body.setVelocityX(0);

    // Horizontal movement
    if (cursors.left.isDown) {
        dot.body.setVelocityX(-160);
    } else if (cursors.right.isDown) {
        dot.body.setVelocityX(160);
    }

    // Jumping movement
    if (cursors.up.isDown && dot.body.touching.down) {
        dot.body.setVelocityY(-330);
    }
}

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 },
            debug: true // Turn on debug mode
        }
    },
    scene: {
        create: create,
        update: update
    }
};


var game = new Phaser.Game(config);
