import * as Diacritic from 'diacritic';

export class StringUtility {
    /**
     * Converts an object to JSON string
     * @param object 
     */
    public static toJSONString(object: any): string {
        if(typeof(object) != "object"){
            return object;
        }
        else{
            return JSON.stringify(object);
        }
    }

    /**
     * Converts an Unicode string to ASCII string
     * @param text 
     */
    public static textUnicodeToASCII(text: string): string {
        return Diacritic.clean(text);
    }

    /**
     * Compare string is mathching
     * @param str 
     * @param diff 
     */
    public static equal(str: string, diff: string): boolean {
        let check: boolean;
        if(str.toString().toLocaleUpperCase() == diff.toString().toLocaleUpperCase()) {
            check = true;
        }
        else {
            return false;
        }
        return check;
    }
}