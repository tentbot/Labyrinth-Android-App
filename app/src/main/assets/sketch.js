let ball;
let wall;

function setup() {
    createCanvas(windowWidth, windowHeight);
    ball = new Ball();
    generateLevel();
}

function draw() {
    background(255);

    wall.render();
    wall.update();

    ball.render();
    ball.update();
}

function generateLevel() {
    wall = new Wall();
}


