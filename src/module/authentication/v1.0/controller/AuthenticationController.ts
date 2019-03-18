import { Request, Response, NextFunction } from "express";

import { BaseController } from "../../../../framework/controller/BaseController";
import { LogFactory } from "../../../../framework/log/LogFactory";
import { IAuthenticationController } from "../interface/control/IAuthenticationController";
import { AuthenticationService } from "../service/AuthenticationService";

export class AuthenticationController extends BaseController implements IAuthenticationController {
    /**
     * Defines a AuthenticationService object
     */
    private _service: AuthenticationService;
    /**
     * Allows to initialize authentication controller object
     */
    constructor () {
        super(LogFactory.create(AuthenticationController.name));
        this._service = new AuthenticationService();
    }

    /**
     * Allows user signin system
     * @param req 
     * @param res 
     * @param next 
     */
    public async signin(req: Request, res: Response, next: NextFunction): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
    /**
     * Allows user singout system
     * @param req 
     * @param res 
     * @param next 
     */
    public async signout(req: Request, res: Response, next: NextFunction): Promise<void> {
        throw new Error("Method not implemented.");
    }
}