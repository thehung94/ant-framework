import { Request, Response, NextFunction } from "express";

import { BaseController } from "../../../../framework/controller/BaseController";
import { LogFactory } from "../../../../framework/log/LogFactory";
import { IHome } from "../interface/control/IHomeController";

export class HomeController extends BaseController implements IHome {
     /**
     * Allows to initialize home controller
     */
    constructor() {
        super(LogFactory.create(HomeController.name));
    }
    
    /**
     * Test api
     * @param req 
     * @param res 
     * @param next 
     */
    public async test(req: Request, res: Response, next: NextFunction): Promise<void> {
        res.send("success test")
    }
}