import {config} from "../app.js";

var BLOCKSIZE = config.BLOCKSIZE;

export class Block extends Entity {
    constructor(type, col, row) {
        this.type = type;
        this.col = col;
        this.row = row;

        switch(this.type) {
            case 'P':
                this.color = { r: 120, g: 120, b: 120 };
                break;

            case 'W':
                this.color = { r: 0, g: 0, b: 0 };
                break;

            case 'L':
                this.color = { r: 120, g: 0, b: 0 };
                break;
        }
    }

    draw() {
        Graphics.drawRect(
            this.col * BLOCKSIZE,
            this.row * BLOCKSIZE,
            BLOCKSIZE,
            BLOCKSIZE,
            this.color.r,
            this.color.g,
            this.color.b,
            0.5
        );
    }
}
