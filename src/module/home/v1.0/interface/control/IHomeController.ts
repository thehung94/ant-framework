import { Request, Response, NextFunction } from "express";

export interface IHome {
    /**
     * Test request
     */
    test(req: Request, res: Response, next: NextFunction): Promise<void>;
}