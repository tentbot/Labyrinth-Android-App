let ball;
let walls = [];
let RUN_GAME = false;
let popup;
let i = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    newGame();
}

async function draw() {
//    translate(0, height*3/4 - ball.pos.y);
    background(255);

    if (RUN_GAME) {
        for (wall of walls) {
            wall.render();
            wall.update();
            wall.checkCollision(ball);
        }

        ball.render();
        ball.update();
    } else {
        for (wall of walls) {
            wall.render();
        }

        ball.render();
        popup.render();
    }
}

function newGame() {
    ball = new Ball(width / 2, height * 3/4);
    generateLevel();
    RUN_GAME = true;
}

function generateLevel() {
    walls = [];
    for (i = 0; i < 5; i++) {
        let wall = new Wall(25, 50 * i, i + 1, 1);
        walls.push(wall);
    }
}

async function gameOver() {
    RUN_GAME = false;
    popup = new Popup(width / 2, height / 2, width * 3/4, height / 4, "Game Over!", 24, 220, 0);
    await new Promise(r => setTimeout(r, 2000));
    window.location.replace("file:///android_asset/main-menu.html");
}

function touchStarted() {
    if (!RUN_GAME) {
        button.onTouch();
    }
}

