import { Request, Response, NextFunction } from "express";

export interface IAuthenticationController {
    /**
     * Allows user signin system
     * @param req 
     * @param res 
     * @param next 
     */
    signin(req: Request, res: Response, next: NextFunction): Promise<void>;

    /**
     * Allows user signout system
     * @param req 
     * @param res 
     * @param next 
     */
    signout(req: Request, res: Response, next: NextFunction): Promise<void>;
}