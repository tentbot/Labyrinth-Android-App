let ball;
let walls = [];
let popup;
let RUN_GAME = false;
let bgColors = ['brown','white','orange','cyan','teal','beige','green','blue','purple','yellow'];
let wave = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    newGame();
}

async function draw() {
    setBackground();
    showWaveNumber();

    if (RUN_GAME) {
        for (wall of walls) {
            wall.render();
            wall.update();
            wall.checkCollision(ball);
        }

        ball.render();
        ball.update();

        spawnObstacles();
    } else {
        for (wall of walls) {
            wall.render();
        }

        ball.render();
        popup.render();
    }
}

/* Start a new game */
function newGame() {
    ball = new Ball(width / 2, height * 3/4);
    RUN_GAME = true;
}

/* Change the background colour every wave */
function setBackground() {
    let index = wave % bgColors.length;
    background(bgColors[index]);
}

/* Draw the wave number on the screen */
function showWaveNumber() {
    textAlign(CENTER, CENTER);
    textSize(128);
    stroke(0);
    strokeWeight(4);
    noFill();
    text(wave, width / 2, height / 2);
}

/* Spawn a group of obstacles */
function spawnObstacles(forceNextWave = false) {
    if (walls.length == 0 || forceNextWave) {
        wave++;
        let x = random(-1, 1) * (width / 2 - 25) + width / 2;
        for (let i = 0; i < 5; i++) {
            let wall = new Wall(x, -50 * i, random(-1,1) * i * 1.1, wave);
            walls.push(wall);
        }
    }
}

/* When the player loses, stop the game and show a popup */
async function gameOver() {
    RUN_GAME = false;
    popup = new Popup(width / 2, height / 2, width * 3/4, height / 4, "Game Over!", 24, 220, 0);
    await new Promise(r => setTimeout(r, 2000));
    window.location.replace("file:///android_asset/main-menu.html");
}

/* Listen for touch events */
async function mouseClicked() {
    await new Promise(r => setTimeout(r, 1000));
    if (RUN_GAME) {
        spawnObstacles(true);
    }
    return false;
}

