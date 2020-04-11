let ball;

function setup() {
    createCanvas(windowWidth, windowHeight);
    ball = new Ball();
}

function draw() {
    background(255);
    ball.render();
    ball.update();
}