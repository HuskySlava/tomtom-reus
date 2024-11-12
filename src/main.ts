// @ts-ignore
import "./style.css"
import {InitService} from "./services/init.service.ts";

const APP_ROOT_ELM = document.querySelector<HTMLDivElement>('#app');

if(!APP_ROOT_ELM) {
    throw new Error("No app ROOT_ELM found.");
}

const initService = InitService.getInstance(APP_ROOT_ELM);
initService.initApp();

console.log("ok")