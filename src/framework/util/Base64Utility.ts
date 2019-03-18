import * as fs from 'fs';
import * as crypto from 'crypto';
import { AppConfiguration } from '../../AppConfiguration';

export class Base64Utility {
    /**
     * Returns a image folder
     */
    /*
    private static getImageFoler(): string {
        let today = new Date();
        let dd = String(today.getDate());
        let mm = String(today.getMonth()+1);

        var yyyy = today.getFullYear();
        if(parseInt(dd) < 10){
            dd = "0" + String(dd) + "";
        } 
        if(parseInt(mm) < 10){
            mm = "0" + mm;
        } 
        let folder = "" + yyyy + mm + dd;
        if(!fs.existsSync(__dirname + AppConfiguration.APP_IMAGE_DEFAULT_FOLDER + folder)) {
            fs.mkdirSync(__dirname + AppConfiguration.APP_IMAGE_DEFAULT_FOLDER + folder, "0777");
        }
        return folder;
    }*/

    /**
     * Returns base64 type
     * @param base64 
     */
    public static getBase64Type(base64: string): string {
        // Decoding base-64 image
        // Source: http://stackoverflow.com/questions/20267939/nodejs-write-base64-image-file
        let imageTypeRegularExpression      = /\/(.*?)$/;
        let matches = base64.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
        let type = "JPG";

        if (matches.length !== 3) {
            return type;
        }
        else{
            type = matches[1].match(imageTypeRegularExpression)[1];
        }
        

        return type;
    }

    /**
     * Returns base64 data
     * @param base64 
     */
    /*
    public static getBase64Data(base64: string) {
        // Decoding base-64 image
        // Source: http://stackoverflow.com/questions/20267939/nodejs-write-base64-image-file
        let matches = base64.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
        let data = new Buffer("");

        if (matches.length !== 3) {
            return data;
        }
        else{
            data = new Buffer(matches[2], 'base64');
        }

        return data;
    }*/

    /**
     * Saves base64 image into disk
     * @param base64 
     * @param username 
     */
    /*
    public static savedBase64Image(base64: string, username: string) {
        // Save base64 image to disk
        return new Promise<any> ((resolve, reject) => {
            try {
                // Get image folder
                var imageFolder                     = this.getImageFoler();

                // Regular expression for image type:
                // This regular image extracts the "jpeg" from "image/jpeg"
                var imageTypeRegularExpression      = /\/(.*?)$/;

                // Generate random string
                var seed                            = crypto.randomBytes(20);
                var uniqueSHA1String                = crypto.createHash('sha1').update(seed).digest('hex');
                var imageBuffer                     = this.getBase64Data(base64);
                var uniqueRandomImageName           = uniqueSHA1String;
                
                // This variable is actually an array which has 5 values,
                // The [1] value is the real image extension
                var imageTypeDetected               = this.getBase64Type(base64).match(imageTypeRegularExpression);
                var userUploadedImagePath           = imageFolder + "/" + uniqueRandomImageName + '.' + this.getBase64Type(base64);

                // Save decoded binary image to disk
                try {
                    fs.writeFile(__dirname + AppConfiguration.APP_IMAGE_DEFAULT_FOLDER + userUploadedImagePath, imageBuffer, (error) => {
                        if(error) {
                            reject(error)
                        }
                        else {
                            //create url webserver for image
                            resolve(AppConfiguration.API_PATH_IMAGES + "/" + imageFolder + "/" + uniqueRandomImageName + '.' + imageTypeDetected[1]);
                        }
                    });
                }
                catch(error) {
                    reject(error)
                }
            }
            catch(error) {
                reject(error)
            }
        });
    }*/
}