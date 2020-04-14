class Button extends Popup {
    constructor(x, y, xDim, yDim, text, textSize, faceColor, edgeColor, clickFunction) {
        super(x, y, xDim, yDim, text, textSize, faceColor, edgeColor);
        this.eval = clickFunction;
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

