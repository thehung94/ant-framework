import { Request, Response, NextFunction } from 'express';

export interface IHttpRequestForwarder {
    /**
     * Forward to next module
     */
    next(req: Request, res: Response, next: NextFunction): void;
}