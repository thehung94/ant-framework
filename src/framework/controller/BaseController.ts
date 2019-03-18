import { Response } from "express";
import * as httpProxy from 'express-http-proxy';

import { Log } from "../log/Log";
import { Localization } from "../../language/Localization";
import { IHttpRequestForwarder } from "../../module/home/v1.0/forwarder/base/IHttpRequestForwarder";
import { Code, Message } from "../response/Response";


export abstract class BaseController {
    /**
     * Define new Log
     */
    protected log: Log;

    /**
     * Define new Localization
     */
    protected localization: Localization;
    /**
     * Defines a Proxy Object
     */
    protected proxy: httpProxy;
    /**
     * Defines a http request forwarder
     */
    protected httpRequestForwarder: IHttpRequestForwarder;
    
    constructor(log: Log) {
        this.localization = new Localization();
        this.log = log;
    }

    /**
     * Error response function
     */
    protected async responeError(res: Response, error: any): Promise<void> {
        let statusCode: number;
        let message: string;
        let code = error && error.code ? error.code : error;
        switch(code) {
            case Code.NotFoundException: {
                statusCode = Code.NotFoundException;
                message = error.message ? error.message : this.localization.t(Message.NotFoundException);
                break;
            };
            default: {
                statusCode = Code.InternalServerError;
                message = this.localization.t(Message.InternalServerError);
            }
        }

        res.json({
            StatusCode: statusCode,
            Message: message
        });
        return;
    }
}