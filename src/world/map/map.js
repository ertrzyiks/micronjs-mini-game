import {Block} from "../blocks/block.js";
import {config} from "../../app.js";

var BLOCKSIZE = config.BLOCKSIZE;

export class GameMap extends Entity {
    constructor() {
        super();

        this.blocks = {};

        this.blocksLayout = [
            "WWWWWWWWWWWWWWWWW",
            "WPPPPPPPPPPPPPPPW",
            "WPPPPPPPPPPPPPPPW",
            "WPPWWWWWWWWWLPPLW",
            "WPPWWWWWWWWWLPPLW",
            "WPPPPPPPPPPPLPPLW",
            "WPPPPPPPPPPPLPPPW",
            "WPPPPPPPPPPPLPPPW",
            "WPPPPPPPPPPPLLLLW",
            "WPPPPPPPPPPPPPPPW",
            "WPPPPPPPPPPPPPPPW",
            "WPPPPPPPPPPPPPPPW",
            "WWWWWWWWWWWWWWWWW"
        ];

        this.blocksLayout.map( (row, rowNum)  => {
            var key;

            for (var colNum = 0; colNum < row.length; colNum++) {
                if (row[colNum] === 'P') continue;

                key = colNum + "|" + rowNum;

                this.blocks[key] = new Block(row[colNum], colNum, rowNum);

                this.add(this.blocks[key]);
            }
        });

        this.width = this.blocksLayout[0].length * BLOCKSIZE;
        this.height = this.blocksLayout.length * BLOCKSIZE;

        this.debug1Block = new Block('D', 0, 0);
        this.debug2Block = new Block('D', 0, 0);
        this.add(this.debug1Block);
        this.add(this.debug2Block);
    }

    setPlayer(player) {
        this.player = player;
        this.add(player);
    }

    canStand(row, col) {
        var key = col + "|" + row;
        if ('undefined' === typeof this.blocks[key]) {
            return true;
        }

        return false;
    }

    fixPlayerPosition() {
        var player = this.player,
            baseCol2RightBottom = Math.floor((player.x + player.width) / BLOCKSIZE),
            baseRow2RightBottom = Math.floor((player.y + player.height) / BLOCKSIZE),
            baseCol2RightTop = Math.floor((player.x + player.width) / BLOCKSIZE),
            baseRow2RightTop = Math.floor((player.y) / BLOCKSIZE),

            baseCol2LeftBottom = Math.floor((player.x) / BLOCKSIZE),
            baseRow2LeftBottom = Math.floor((player.y + player.height) / BLOCKSIZE),
            baseCol2LeftTop = Math.floor((player.x) / BLOCKSIZE),
            baseRow2LeftTop = Math.floor((player.y) / BLOCKSIZE);

        if (player.velocity.x > 0) {
            if(this.canStand(baseRow2RightBottom, baseCol2RightBottom - 1) &&
                !this.canStand(baseRow2RightBottom, baseCol2RightBottom)) {
                player.x = (baseCol2RightBottom) * BLOCKSIZE - player.width;
            }
            else if (this.canStand(baseRow2RightTop, baseCol2RightTop - 1) &&
                !this.canStand(baseRow2RightTop, baseCol2RightTop)) {
                player.x = (baseCol2RightTop) * BLOCKSIZE - player.width;
            }
        }

        if (player.velocity.x < 0) {
            if(this.canStand(baseRow2LeftBottom, baseCol2LeftBottom + 1) &&
                !this.canStand(baseRow2LeftBottom, baseCol2LeftBottom)) {
                player.x = (baseCol2LeftBottom + 1) * BLOCKSIZE;
            }
            else if (this.canStand(baseRow2LeftTop, baseCol2LeftTop + 1) &&
                !this.canStand(baseRow2LeftTop, baseCol2LeftTop)) {
                player.x = (baseCol2LeftTop + 1) * BLOCKSIZE;
            }
        }

        if (player.velocity.y > 0) {
            if(this.canStand(baseRow2LeftBottom - 1, baseCol2LeftBottom) &&
                !this.canStand(baseRow2LeftBottom, baseCol2LeftBottom)) {
                player.y = (baseRow2LeftBottom) * BLOCKSIZE - player.height;
            }

            else if(this.canStand(baseRow2RightBottom - 1, baseCol2RightBottom) &&
                !this.canStand(baseRow2RightBottom, baseCol2RightBottom)) {
                player.y = (baseRow2RightBottom) * BLOCKSIZE - player.height;
            }
        }

        if (player.velocity.y < 0) {
            if(this.canStand(baseRow2LeftTop + 1, baseCol2LeftTop) &&
                !this.canStand(baseRow2LeftTop, baseCol2LeftTop)) {
                player.y = (baseRow2LeftTop + 1) * BLOCKSIZE;
            }

            else if(this.canStand(baseRow2RightTop + 1, baseCol2RightTop) &&
                !this.canStand(baseRow2RightTop, baseCol2RightTop)) {
                player.y = (baseRow2RightTop + 1) * BLOCKSIZE;
            }
        }
    }
}
