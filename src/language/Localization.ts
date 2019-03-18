import EnMessage from './en/Message';
import ViMessage from './vi/Message';
import { AppCommon } from '../AppCommon';

export class Localization {
    private _defaultMessageFile: string = 'Message';

    /**
     * Defines a language
     */
    private _language;

    /**
     * Allows to initialize a localization object
     * @param language 
     */
    constructor(language: string = "") {
        if (language) {
            this._language = language
        } else {
            this._language = AppCommon.APP_LANGUAGE_EN
        }
    }
    
    /**
     * Transalte this message to Enlish or Vietnamese
     * @param message 
     * @param params 
     */
    t(message: any, params: object = {}): string {
        let file = this._defaultMessageFile;

        if(!file || !message || (params && typeof params !== 'object')){
            return "";
        }
        let result = "";
        switch (this._language) {
            case AppCommon.APP_LANGUAGE_VI: {
                result = ViMessage[message];
                break;
            };
            default: {
                result = EnMessage[message];
            }
        }
        
        if(params) {
            for(let p in params) {
                let replace = "{"+p+"}";
                while(result.indexOf(replace) >= 0){
                    result = result.replace(replace, params[p]);
                }
            }
        }
        return result;
    }
}

export default Localization;