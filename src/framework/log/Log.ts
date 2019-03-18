import * as fs from 'fs';
import * as path from 'path';
import { Request } from 'express';
import AppConfiguration from '../../AppConfiguration';
import { StringUtility } from '../util/StringUtility';
import { AppCommon } from '../../AppCommon';

const INFO_LEVEL: string = "[info-level]";
const WARN_LEVEL: string = "[warning-level]";
const DEBUG_LEVEL: string = "[debug-level]";
const ERROR_LEVEL: string = "[error-level]";

export class Log {
    /**
     * Define a _logfolder
     */
    private _logFolder: string;

    /**
     * Define a _name of log line
     */
    private _name: string;

    /**
     * Allows to initialize a Log object
     * @param name 
     */
    constructor(name: string) {
        this._name = name;
        this._logFolder = this.getLogFoler();
    }

    /**
     * Returns a Log folder
     */
    private getLogFoler(): string {
        const today = new Date();
        let dd = String(today.getDate());
        let mm = String(today.getMonth()+1);

        var yyyy = today.getFullYear();
        if(parseInt(dd) < 10){
            dd = "0" + String(dd) + "";
        } 
        if(parseInt(mm) < 10){
            mm = "0" + mm;
        } 
        const folder = "" + yyyy + mm + dd;
        const logFolder = path.join(__dirname, AppConfiguration.LOG_DEFAULT_FOLDER, folder);
        if(!fs.existsSync(logFolder)) {
            fs.mkdirSync(logFolder, "0777");
        }
        return folder;
    }

    /**
     * Writes a log into file
     * @param folder 
     * @param filename 
     * @param level 
     * @param action 
     * @param message 
     */
    private write(folder, filename, level, action, message): void {
        const file = path.join(AppConfiguration.LOG_DEFAULT_FOLDER, folder, filename);
        const writer = fs.createWriteStream(file, {
            encoding: "UTF-8",
            flags : 'a'
        });
        writer.write(this.getCurrentDateTime() + "[" + this._name + "]" + "[" + level + "]" +"[" + action + "]: " + message + "\n");
    }

    /**
     * Gets current date and time
     */
    private getCurrentDateTime(): string{
        let today = new Date();
        let dd = String(today.getDate());
        let mm = String(today.getMonth()+1);
        var yyyy = today.getFullYear();
        let hour = String(today.getHours());
        let min = String(today.getMinutes());
        let sec = String(today.getSeconds());
        if(parseInt(dd) < 10){
            dd = "0" + String(dd) + "";
        } 
        if(parseInt(mm) < 10){
            mm = "0" + mm;
        } 
        let time = "[" + mm + "/"+ dd + "/" + yyyy + " " + hour + ":" + min + ":" + sec + "]";
        return time;
    }

    /**
     * Gets request info
     * @param req 
     */
    private getRequestInfos(req: Request): any {
        const reqInfos = {
            ip: req.header('x-forwarded-for') || req.connection.remoteAddress,
            authorization: req.headers.authorization
        }

        return reqInfos;
    }

    /**
     * Writes info log
     * @param req 
     * @param action 
     * @param message 
     */
    public info(req: Request, action: string, message: any): void {
        const data = this.getRequestInfos(req);
        data.message = message;
        this.write(this._logFolder, AppCommon.LOG_FILE_INFO, INFO_LEVEL, action, StringUtility.toJSONString(data));
    }

    /**
     * Writes warn log
     * @param req 
     * @param action 
     * @param message 
     */
    public warn(req: Request, action: string, message: any): void {
        const data = this.getRequestInfos(req);
        data.message = message;
        this.write(this._logFolder, AppCommon.LOG_FILE_WARNING, WARN_LEVEL, action, StringUtility.toJSONString(data));
    }

    /**
     * Writes debug log
     * @param req 
     * @param action 
     * @param message 
     */
    public debug(req: Request, action: string, message: any): void {
        const data = this.getRequestInfos(req);
        data.message = message;
        this.write(this._logFolder, AppCommon.LOG_FILE_DEBUG, DEBUG_LEVEL, action, StringUtility.toJSONString(data));
    }

    /**
     * Writes error log
     * @param req 
     * @param action 
     * @param message 
     */
    public error(req: Request, action: string, message: any): void {
        const data = this.getRequestInfos(req);
        data.message = message;
        this.write(this._logFolder, AppCommon.LOG_FILE_ERROR, ERROR_LEVEL, action, StringUtility.toJSONString(data));
    }
}

export default Log;