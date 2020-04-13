class Wall {
    constructor() {
        this.pos = new p5.Vector(0, 0);
        this.len = new p5.Vector(50, 100);
        this.vel = new p5.Vector(10, 0);
    }

    render() {
        push();
        noStroke();
        fill(0);
        rectMode(CORNER);
        rect(this.pos.x, this.pos.y, this.len.x, this.len.y);
        pop();
    }

    update() {
        if (this.pos.x > width - this.len.x) {
            let offsetX = this.pos.x + this.len.x - width;
            this.pos.x -= offsetX;
            this.vel.x *= -1;
        } else if (this.pos.x < 0) {
            let offsetX = this.pos.x;
            this.pos.x -= offsetX;
            this.vel.x *= -1;
        }
        this.pos.x += this.vel.x;

        if (this.pos.y > height - this.len.y) {
            let offsetY = this.pos.y + this.len.y - height;
            this.pos.y -= offsetY;
            this.vel.y *= -1;
        } else if (this.pos.y < 0) {
            let offsetY = this.pos.y;
            this.pos.y -= offsetY;
            this.vel.y *= -1;
        }
        this.pos.y += this.vel.y;
    }
}

