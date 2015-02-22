import {config} from "app.js";

import "map/map.js";

class Player extends Entity {
    constructor() {
        super();

        this.speed = 2;
        this.x = 0;
        this.y = 0;

        this.color = {
            r: 255,
            g: 255,
            b: 255
        };
    }

    moveDown() {
        this.y += this.speed;
    }

    moveUp() {
        this.y -= this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    moveRight() {
        this.x += this.speed;
    }

    draw() {
        Graphics.drawRect(
            this.x,
            this.y,
            config.PLAYERSIZE,
            config.PLAYERSIZE,
            this.color.r,
            this.color.g,
            this.color.b,
            0.5
        );
    }
}


class StateGame extends State {
    constructor() {
        super();

        this.player = new Player();
    }

    init() {
        Camera.fade( {r:0, g:0, b:0, a:1}, {r:0, g:0, b:0, a:0}, 1);
    }

    update(delta) {
        super.update(delta);

        if (Input.isKeyPressed(Input.KEY_S)) {
            this.player.moveDown();
        }
        else if (Input.isKeyPressed(Input.KEY_W)) {
            this.player.moveUp();
        }

        if (Input.isKeyPressed(Input.KEY_A)) {
            this.player.moveLeft();
        }
        else if (Input.isKeyPressed(Input.KEY_D)) {
            this.player.moveRight();
        }
    }

    draw() {
        super.draw();

        this.player.draw();
    }
}

Core.init(640, 480);
Core.setState(new StateGame());
Core.addAsset([	'empty', 'img/empty.jpg' ]);
Core.loadAndRun();
