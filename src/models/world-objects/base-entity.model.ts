export interface BaseEntity {
    id: number,
    name: string,
    startX: number,
    startY: number
}

export abstract class BaseEntityModel {
    public readonly id: number;
    public readonly name: string;
    public readonly startX: number;
    public readonly startY: number;

    public posX: number;
    public posY: number;

    protected constructor(public entity: BaseEntity) {
        this.id = entity.id;
        this.name = entity.name;
        this.startX = entity.startX;
        this.startY = entity.startY;
        this.posX = entity.startX;
        this.posY = entity.startY;
    }

    abstract render(ctx: CanvasRenderingContext2D): void;
}