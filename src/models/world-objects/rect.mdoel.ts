import {BaseEntity, BaseEntityModel} from "./base-entity.model.ts";

interface Rect extends BaseEntity {
    width: number;
    height: number;
    color: string;
}

export class RectModel extends BaseEntityModel {
    public width: number;
    public height: number;
    public color: string;

    constructor(rect: Rect) {
        super(rect);
        this.width = rect.width;
        this.height = rect.height;
        this.color = rect.color;
    }

    render(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.posX, this.posY, this.width, this.height);
    }
}