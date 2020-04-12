class Ball {

    constructor() {
        let x = random() * width;
        let y = random() * height;
        this.pos = new p5.Vector(x, y);
        this.vel = new p5.Vector(0, 0);
        this.acc = new p5.Vector(0, 0);
        this.radius = 20;
    }

    render() {
        push();
        fill(255,0,0);
        stroke(255,0,0);
        ellipse(this.pos.x, this.pos.y, this.radius*2);
        pop();
    }

    update() {
        this.move();
        this.vel.mult(0.9);
        this.vel.add(this.acc);
        this.acc.mult(0.9);

        this.gravity();
    }

    move() {
//        let direction = this.detectCollision();
        if (this.pos.x >= width - this.radius) {
            let offsetX = this.pos.x + this.radius - width;
            this.pos.x -= offsetX;
            this.vel.x *= 0.8;
        } else if (this.pos.x <= this.radius) {
            let offsetX = this.pos.x - this.radius;
            this.pos.x -= offsetX;
            this.vel.x *= -0.8;
        }
        this.pos.x += this.vel.x;

        if (this.pos.y >= height - this.radius) {
            let offsetY = this.pos.y + this.radius - height;
            this.pos.y -= offsetY;
            this.vel.y *= 0.8;
        } else if (this.pos.y <= this.radius) {
            let offsetY = this.pos.y - this.radius;
            this.pos.y -= offsetY;
            this.vel.y *= -0.8;
        }
        this.pos.y += this.vel.y;
    }

    gravity() {
        let gravity = new p5.Vector(rotationY, rotationX);
        gravity = gravity.mult(0.005);
        if (gravity.mag() < 0.01) {
            gravity.setMag(0);
        }
        this.acc.add(gravity);
    }

}