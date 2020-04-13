let ball;
let walls = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    newGame();
}

function draw() {
    background(255);

    for (wall of walls) {
        wall.render();
        wall.update();
        if (wall.checkCollision(ball)) {
            gameOver();
        }
    }

    ball.render();
    ball.update();
}

function newGame() {
    ball = new Ball();
    generateLevel();
}

function generateLevel() {
    for (i = 0; i < 5; i++) {
        let wall = new Wall(0, 50 * i, i + 1);
        walls.push(wall);
    }
}

function gameOver() {
    // Spawn dialog box, game over animation, etc.
}

