import {Player} from "world/player.js";

describe("A player", function() {
    var player;

    beforeEach(function () {
        player = new Player();
    });

    it("should have x,y coordinates", function() {
        expect(typeof(player.x)).toBe('number');
        expect(typeof(player.y)).toBe('number');
    });
});
