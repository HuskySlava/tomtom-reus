import {BaseEntityModel} from "../models/world-objects/base-entity.model.ts";
import {RectModel} from "../models/world-objects/rect.mdoel.ts";

export class RenderService {
    private static instance: RenderService;
    private mainCanvas: HTMLCanvasElement | undefined;
    private ctx: CanvasRenderingContext2D | null | undefined;
    private frameCount: number = 0;

    private constructor() {};

    private renderQueue: BaseEntityModel[] = [];

    public static getInstance(): RenderService {
        if (!RenderService.instance) {
            RenderService.instance = new RenderService();
            return RenderService.instance;
        }
        return RenderService.instance;
    }

    public init(appRoot: HTMLElement): void {
        if(!this.mainCanvas){
            this.mainCanvas = document.createElement("canvas");
            this.mainCanvas.width = 800;
            this.mainCanvas.height = 600;
            this.ctx = this.mainCanvas.getContext("2d");
            appRoot.appendChild(this.mainCanvas);
        }

        this.renderLoop();
        this.testRect();
    }

    private clearFrame(){
        if(this.ctx && this.mainCanvas){
            this.ctx.fillStyle = '#000';
            this.ctx.fillRect(0, 0, this.mainCanvas.width, this.mainCanvas.height);
        }
    }

    private renderLoop(){

        if(!this.ctx){
            throw new Error("Can't render, check canvas");
        }

        window.requestAnimationFrame(() => {
            this.frameCount++;
            this.clearFrame();

            this.renderQueue.forEach(entity => {
                entity.render(this.ctx as CanvasRenderingContext2D);
            })

            this.renderLoop();
        });

    }

    private testRect() {
        if(!this.mainCanvas){
            throw new Error("Can't render, check canvas");
        }
        const testRect = new RectModel({
            id: 0,
            name: "Test Rect",
            startX: this.mainCanvas.width / 2 - 50,
            startY: this.mainCanvas.height / 2 - 100,
            height: 100,
            width: 100,
            color: "red"
        })
        this.renderQueue.push(testRect);
    }

}