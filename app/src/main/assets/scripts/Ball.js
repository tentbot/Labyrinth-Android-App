class Ball {
    /* Make a new ball at position (x,y) */
    constructor(x, y, radius, mass) {
        this.pos    = new p5.Vector(x, y);
        this.vel    = new p5.Vector(0, 0);
        this.acc    = new p5.Vector(0, 0);
        this.radius = radius || 20;
        this.len    = new p5.Vector(this.radius, this.radius);
        this.mass   = mass || 1;
    }

    /* Show the ball on the screen */
    render() {
        push();
        fill(255,0,0);
        stroke(255,0,0);
        ellipse(this.pos.x, this.pos.y, this.radius*2);
        pop();
    }

    /* Update the ball's position, velocity, and acceleration */
    update() {
        this.move();

        this.vel.mult(0.85);
        this.vel.add(this.acc);
        this.acc.mult(0.9 / this.mass);

        this.gravity();
    }

    /* Update the position of the Ball. If the Ball hits an edge, keep it within the screen. */
    move() {
        if (this.pos.x >= width - this.radius) {
            let offsetX = this.pos.x + this.radius - width;
            this.pos.x -= offsetX;
            this.vel.x *= 0.8;
        } else if (this.pos.x <= this.radius) {
            let offsetX = this.pos.x - this.radius;
            this.pos.x -= offsetX;
            this.vel.x *= 0.8;
        }
        this.pos.x += this.vel.x;

        if (this.pos.y >= height - this.radius) {
            let offsetY = this.pos.y + this.radius - height;
            this.pos.y -= offsetY;
            this.vel.y *= 0.8;
        } else if (this.pos.y <= this.radius) {
            let offsetY = this.pos.y - this.radius;
            this.pos.y -= offsetY;
            this.vel.y *= 0.8;
        }
        this.pos.y += this.vel.y;
    }

    /* Accelerate the ball in the direction of tilt */
    gravity() {
        let gravity = new p5.Vector(rotationY, rotationX);
        gravity = gravity.mult(0.01);
        gravity.setMag(gravity.mag() - 0.01);
        this.acc.add(gravity);
    }
}

