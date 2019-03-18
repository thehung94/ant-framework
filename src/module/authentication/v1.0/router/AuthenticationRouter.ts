import { Request, Response, NextFunction } from "express";

import { BaseRouter } from "../../../../framework/router/BaseRouter";
import { AuthenticationController } from "../controller/AuthenticationController";
import { Message, Code } from "../../../../framework/response/Response";


export class AuthenticationRouter extends BaseRouter {
    /**
    * Allows to initialize home router object
    */
    constructor() {
        super("authentication");
        this.init();
    }

    /**
     * Allows user signin system
     * @param req 
     * @param res 
     * @param next 
     */
    private signin(req: Request, res: Response, next: NextFunction): void {
        let controller = new AuthenticationController();
        controller.signin(req, res, next);
    }

    /**
     * Allows user signout system
     * @param req 
     * @param res 
     * @param next 
     */
    private signout(req: Request, res: Response, next: NextFunction): void {
        let controller = new AuthenticationController();
        controller.signout(req, res, next);
    }

    protected init(): void {     
        this.Router.post('/signin', [
            this.validator('email').not().isEmail(),
            // .... validates
        ], (req: Request, res: Response, next: NextFunction) => {
            const errors = this.validate(req);
            
            if (!errors.isEmpty()) {
                return res.json({
                    Status: false,
                    Code: Code.InternalServerError,
                    Message: this.localization.t(Message.InternalServerError),
                    Data: null,
                    Errors: errors.array()
                })    
            }

            this.signin
        });
        this.Router.post('/signout', this.signout);
    }

}

export default new AuthenticationRouter();