import {config} from "../app.js";

var PLAYERSIZE = config.PLAYERSIZE;

export class Player extends Entity {
    constructor() {
        super();

        this.x = 100;
        this.y = 100;

        this.width = PLAYERSIZE;
        this.height = PLAYERSIZE;

        this.velocity = {
            x: 0,
            y: 0
        };

        this.friction = 0.3;

        this.speed = 100;

        this.color = {
            r: 255,
            g: 255,
            b: 255
        };
    }

    moveDown() {
        this.velocity.y = this.speed;
    }

    moveUp() {
        this.velocity.y = -this.speed;
    }

    moveLeft() {
        this.velocity.x = -this.speed;
    }

    moveRight() {
        this.velocity.x = this.speed;
    }

    update(delta) {
        this.x += this.velocity.x * delta;
        this.y += this.velocity.y * delta;

        this.velocity.x = this.velocity.x - this.velocity.x * this.friction;
        this.velocity.y = this.velocity.y - this.velocity.y * this.friction;
    }

    draw() {
        Graphics.drawRect(
            this.x,
            this.y,
            this.width,
            this.height,
            this.color.r,
            this.color.g,
            this.color.b,
            0.5
        );
    }
}
