class Wall {
    constructor(x, y, velX, velY, onCollision) {
        this.pos = new p5.Vector(x, y);
        this.rad = new p5.Vector(25, 25);
        this.vel = new p5.Vector(velX, velY);
        this.onCollision = onCollision || gameOver;
    }

    render() {
        push();
        noStroke();
        fill(0);
        rectMode(RADIUS);
        rect(this.pos.x, this.pos.y, this.rad.x, this.rad.y);
        pop();
    }

    update() {
        if (this.pos.x + this.rad.x > width) {
            let offsetX = this.pos.x + this.rad.x - width;
            this.pos.x -= offsetX;
            this.vel.x *= -1;
        } else if (this.pos.x - this.rad.x < 0) {
            let offsetX = this.pos.x - this.rad.x;
            this.pos.x -= offsetX;
            this.vel.x *= -1;
        }
        this.pos.x += this.vel.x;

        if (this.pos.y - this.rad.y > height) {
            walls.splice(walls.indexOf(this), 1);
        } else if (this.pos.y - this.rad.y < 0) {
            let offsetY = this.pos.y - this.rad.y;
            this.pos.y -= offsetY;
            this.vel.y *= -1;
        }
        this.pos.y += this.vel.y;
    }

    checkCollision(other) {
        let distX = abs(this.pos.x - other.pos.x);
        let distY = abs(this.pos.y - other.pos.y);

        if (distX > this.rad.x + other.len.x || distY > this.rad.y + other.len.y)
            return;

        if (distX < this.rad.x || distY < this.rad.y)
            this.onCollision();

        let distCorner = (distX - this.rad.x)^2 + (distY - this.rad.y)^2;
        
        if (distCorner < other.radius)
            this.onCollision();
    }

}

