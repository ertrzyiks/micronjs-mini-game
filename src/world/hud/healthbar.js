export class HealthBar extends Entity {
    constructor(maxHp) {
        super();

        this.border = 1;
        this.padding = 1;
        this.width = 140;
        this.height = 20;
        this.maxHp = maxHp;
        this.hp = maxHp;
    }

    update() {
        this.hpPercentage = this.hp / this.maxHp;
    }

    draw() {
        Graphics.drawRect(
            this.x,
            this.y,
            this.width,
            this.height,
            1,
            1,
            1,
            0.5
        );

        Graphics.drawRect(
            this.x + this.border,
            this.y + this.border,
            this.width - this.border - this.border,
            this.height - this.border - this.border,
            0,
            0,
            0,
            1.0
        );

        Graphics.drawRect(
            this.x + this.border + this.padding,
            this.y + this.padding + this.border,
            (this.width - this.padding - this.padding - this.border - this.border) * this.hpPercentage,
            this.height - this.padding - this.padding - this.border - this.border,
            0,
            0.5,
            0,
            1.0
        );
    }
}
