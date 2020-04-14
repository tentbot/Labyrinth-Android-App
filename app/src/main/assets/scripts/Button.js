class Button extends Popup {
    constructor(x, y, xDim, yDim, text, textSize, faceColor, edgeColor, clickFunction) {
        this.size           = 0;
        this.pos            = new p5.Vector(x, y);
        this.len            = new p5.Vector(xDim, yDim);
        this.text           = text || "Alert!";
        this.textSize       = textSize || 24;
        this.faceColor      = faceColor || 255;
        this.edgeColor      = edgeColor || 0;
        this.clickFunction = clickFunction;
    }

    render() {
        push();

        rectMode(CENTER);
        stroke(this.edgeColor);
        fill(this.faceColor);
        rect(this.pos.x, this.pos.y, this.len.x, this.len.y);

        textAlign(CENTER, CENTER);
        textSize(16);
        noStroke();
        fill(this.edgeColor);
        text(this.text, this.pos.x, this.pos.y);

        pop();
    }

    onTouch() {
        if (this.pos.x - this.len.x/2 < touches[0].x && this.pos.x + this.len.x/2 > touches[0].x
            && this.pos.y - this.len.x/2 < touches[0].y && this.pos.y + this.len.y/2 > touches[0].y) {
            this.eval();
        }
    }

    setText(text) {
        this.text = text;
    }
}

