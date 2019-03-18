import { Request, Response, NextFunction } from "express";

import { HomeController } from "../controller/HomeController";
import { BaseRouter } from "../../../../framework/router/BaseRouter";


export class HomeRouter extends BaseRouter {
    /**
    * Allows to initialize home router object
    */
    constructor() {
        super("home");
        this.init();
    }

    /**
     * Test api
     * @param req 
     * @param res 
     * @param next 
     */
    private test(req: Request, res: Response, next: NextFunction): void {
        let controller = new HomeController();
        controller.test(req, res, next);
    }

    protected init(): void {     
        this.Router.get('/', this.test);
    }

}

export default new HomeRouter();