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

        this.direction = {
            x: 0,
            y: 0
        };

        this.friction = 0.3;

        this.speed = 100;

        this.color = {
            r: 20,
            g: 20,
            b: 200
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
        this.direction.x = 0;
        this.direction.y = 0;

        this.x += this.velocity.x * delta;
        this.y += this.velocity.y * delta;

        this.velocity.x = this.velocity.x - this.velocity.x * this.friction;
        this.velocity.y = this.velocity.y - this.velocity.y * this.friction;

        if (Math.abs(this.velocity.x) < 10.0) {
            this.velocity.x = 0.0;
        }

        if (Math.abs(this.velocity.y) < 10.0) {
            this.velocity.y = 0.0;
        }

        if (this.velocity.x > 0) {
            this.direction.x = 1.0;
        } else if (this.velocity.x < 0) {
            this.direction.x = -1.0;
        }

        if (this.velocity.y > 0) {
            this.direction.y = 1.0;
        } else if (this.velocity.y < 0) {
            this.direction.y = -1.0;
        }
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

        Graphics.drawCircle(
            this.x + this.width / 2 + this.direction.x * 2.0,
            this.y + this.width / 2 + this.direction.y * 2.0,
            2,
            0,
            0,
            0,
            1
        );
    }
}
