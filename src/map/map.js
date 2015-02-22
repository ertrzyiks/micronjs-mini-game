import {Block} from "../blocks/block.js";
import {config} from "../app.js";

var BLOCKSIZE = config.BLOCKSIZE;

export class GameMap extends Entity {
    constructor() {
        super();

        this.blocksLayout = [
            "PPPPPPPPPPPPPPP",
            "PPPPPPPPPPPPPPP",
            "PPWWWWWWWWWLPPL",
            "PPWWWWWWWWWLPPL",
            "PPPPPPPPPPPLPPL",
            "PPPPPPPPPPPLPPP",
            "PPPPPPPPPPPLPPP",
            "PPPPPPPPPPPLLLL",
            "PPPPPPPPPPPPPPP",
            "PPPPPPPPPPPPPPP",
            "PPPPPPPPPPPPPPP"
        ];

        this.blocks = this.blocksLayout.map(function (row, rowNum) {
            var blocks = [];

            for (var colNum = 0; colNum < row.length; colNum++) {
                blocks.push(new Block(row[colNum], colNum, rowNum));
            }

            return blocks;
        });


        this.width = this.blocksLayout[0].length * BLOCKSIZE;
        this.height = this.blocksLayout.length * BLOCKSIZE;
    }

    draw() {
        this.blocks.forEach(function (rowBlocks) {
            rowBlocks.forEach(function (cellBlock) {
                cellBlock.draw();
            });
        });
    }
}
