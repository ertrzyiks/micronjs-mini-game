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

        this.blocksLayout.map( (row, rowNum)  => {
            for (var colNum = 0; colNum < row.length; colNum++) {
                this.add(new Block(row[colNum], colNum, rowNum));
            }
        });

        this.width = this.blocksLayout[0].length * BLOCKSIZE;
        this.height = this.blocksLayout.length * BLOCKSIZE;
    }
}
