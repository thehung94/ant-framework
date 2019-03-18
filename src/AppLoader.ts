import { EnvDev } from "./env/env.dev";
import { EnvProd } from "./env/env.prod";
import { EnvTest } from "./env/env.test";

export class AppLoader {

    /**
     * Used to return current value of variable on current environment
     * @param variableName 
     */
    public static getVariable(variableName: string): string {
        let envFile: any;
        const environment = process.env.ENVIRONMENT;
        switch(environment) {
            case "dev": {
                envFile = EnvDev;
                break;
            };
            case "test": {
                envFile = EnvTest;
                break;
            };
            default: {
                envFile = EnvProd;
            } 
        }

        return envFile[variableName];
    }
}