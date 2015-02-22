import "../blocks/block.js";

class Map extends Entity {
    constructor() {
        super();

        this.blocks = [];

        this.blocksLayout = [
            "PPPPPPPPPPPPPPP",
            "PPPPPPPPPPPPPPP",
            "PPWWWWWWWWWPPPP",
            "PPWWWWWWWWWPPPP",
            "PPPPPPPPPPPPPPP",
            "PPPPPPPPPPPPPPP",
            "PPPPPPPPPPPPPPP",
            "PPPPPPPPPPPPPPP",
            "PPPPPPPPPPPPPPP",
            "PPPPPPPPPPPPPPP",
            "PPPPPPPPPPPPPPP"
        ];
    }

    init() {
        this.blocksLayout.forEach(function (row) {

        });
    }

    draw() {

    }
}
