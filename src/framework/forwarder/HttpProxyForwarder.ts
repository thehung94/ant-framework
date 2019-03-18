import * as httpProxy from 'express-http-proxy';

export class HttpProxyForwarder {
    /**
     * Defines a express http proxy object
     */
    protected proxy: httpProxy;
    /**
     * Defines a module name
     */
    protected moduleName: string
    /**
     * Allows to initialize request forwader object
     */
    constructor(_moduleName: string) {
        this.moduleName = _moduleName;
    }
}