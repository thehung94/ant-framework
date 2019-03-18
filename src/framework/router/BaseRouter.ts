import * as  express from 'express';
import { check, validationResult, ValidationChainBuilder, ResultFactory} from 'express-validator/check';
import Localization from '../../language/Localization';

export abstract class BaseRouter {
    
    /**
     * Defines a validator object
     */
    protected validator: ValidationChainBuilder;

    /**
     * Defines a ResultFactory object
     */
    protected validate: ResultFactory;

    /**
     * Defines a Router object
     */
    public Router : express.Router;
    
    /**
     * Defines a module name
     */
    public Path: string;

    protected localization: Localization;
    
    /**
     * Allows to initialize a BaseRouter object
     */
    constructor(path: string) {
        /**
         * Set validator object is check function
         */
        this.validator = check;
        // Set validate object is validationResult function
        this.validate = validationResult;
        this.Router = express.Router();
        this.Path = path;
        this.localization = new Localization();
    }

    /**
     * Initializes all routes
     */
    protected abstract init() : void;
}

export default BaseRouter;