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
        this.vel.mult(0.85);
        this.vel.add(this.acc);
        this.acc.mult(0.9);
        
        let gravity = new p5.Vector(rotationY, rotationX);
        gravity = gravity.mult(0.007);
        this.acc.add(gravity);
    }

    move() {
        if (this.pos.x >= width - this.radius || this.pos.x <= this.radius) {
            this.vel.x *= -0.95;
            this.acc.x = 0;
        }
        this.pos.x += this.vel.x;

        if (this.pos.y >= height - this.radius || this.pos.y <= this.radius) {
            this.vel.y *= -0.95;
            this.acc.y = 0;
        }
        this.pos.y += this.vel.y;
    }

}