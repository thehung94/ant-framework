import { Log } from "./Log";

export abstract class LogFactory {
    /**
     * create new Log object
     * @param name 
     */
    public static create(name: string): Log {
        return new Log(name);
    }
}