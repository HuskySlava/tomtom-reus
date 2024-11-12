import {RenderService} from "./render.service.ts";

export class InitService {
    private static instance: InitService;
    private appRoot: HTMLElement;
    private renderService: RenderService | undefined;
    private constructor(appRoot: HTMLElement) {
        this.appRoot = appRoot;
    };

    public static getInstance(appRoot: HTMLElement): InitService {
        if (!InitService.instance) {
            InitService.instance = new InitService(appRoot);
            return InitService.instance;
        }
        return InitService.instance;
    }

    public initApp(){
        console.log("Initializing app...", this.appRoot);
        this.renderService = RenderService.getInstance();
        this.renderService.init(this.appRoot);
        console.log("ok")
    }
}