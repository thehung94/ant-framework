import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as logger from 'morgan';
import * as path from 'path';

import AppConfiguration from './AppConfiguration';

import { BaseRouter } from './framework/router/BaseRouter';
import DefaultRouter from './framework/router/DefautRouter';

import HomeRouter_V1 from './module/home/v1.0/router/HomeRouter';

class App {

    /**
     * Define new Express Application
     */

    public Express: express.Application;

    /**
     * Initializies App object
     */
    constructor() {
        this.Express = express();
        this.middleware();
        this.routes();
        dotenv.config();
    }

    /**
     * Return Route file
     * @param version 
     * @param path 
     */
    private getRouteFile(version: string, path: string): BaseRouter {
        let Routes: BaseRouter[];
        let Route: BaseRouter = DefaultRouter;
        let RoutersV1 = [
            HomeRouter_V1
        ];

        let RoutersV2 = [
        ]

        switch(version) {
            case "v1.0":
            Routes = RoutersV1
            break;
            case "v2.0":
            Routes = RoutersV2
            break;
            default:
            Routes = RoutersV2
        }
        
        Routes.forEach(route => {
            if(route.Path == path) {
                Route = route;
            }
        });

        return Route;
    }

    private routes(): void {
        this.Express.get(AppConfiguration.API_PATH_BASE  + AppConfiguration.API_PATH_HEALTH_CHECK, (req, res, next) => {
            res.sendFile(path.join(__dirname, '/../public/view/index.html'));
        });
        //////////////////////////////
        // Init route
        this.Express.use(AppConfiguration.API_PATH_BASE + AppConfiguration.API_PARAM_VERSION + AppConfiguration.API_PARAM_PATH, (req, res, next) => {
            let version = req.params.version;
            let path = req.params.path;
            let Route = this.getRouteFile(version, path).Router;
            Route(req, res, next);
        });
    }

    private middleware(): void {
        this.Express.use(logger(process.env.ENVIRONMENT))
        this.Express.use(bodyParser.json({limit: '50mb'}));
        this.Express.use(bodyParser.urlencoded({
            extended: true,
            limit: '50mb'
        }));
    }
}

export default new App().Express;