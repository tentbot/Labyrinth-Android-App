class Popup {
    constructor(x, y, xDim, yDim, text, textSize, faceColor, edgeColor) {
        this.size       = 0;
        this.acc        = 1;
        this.pos        = new p5.Vector(x, y);
        this.len        = new p5.Vector(xDim, yDim);
        this.text       = text || "Alert!";
        this.textSize   = textSize || 24;
        this.faceColor  = faceColor || 255;
        this.edgeColor  = edgeColor || 0;
    }

    render() {
        this.update();

        push();

        rectMode(CENTER);
        stroke(this.edgeColor);
        fill(this.faceColor);
        let xLen = map(this.size, 0, 100, 0, this.len.x);
        let yLen = map(this.size, 0, 100, 0, this.len.y);

        rect(this.pos.x, this.pos.y, xLen, yLen);

        textAlign(CENTER, CENTER);
        noStroke();
        fill(this.edgeColor);
        textSize(map(this.size, 0, 100, 0, this.textSize));

        text(this.text, this.pos.x, this.pos.y);

        pop();
    }

    update() {
        if (this.size < 100) {
            this.size += this.acc;
            this.acc += 1;
        }
    }
}

