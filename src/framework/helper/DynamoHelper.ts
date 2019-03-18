import * as AWS from 'aws-sdk';
import * as path from 'path';

export class DynamoHelper {
    /**
     * Defines a AWS DocumentClient object
     */
    private _docClient: AWS.DynamoDB.DocumentClient;

    /**
     * Allows to initial DynamoHelper Object
     */
    constructor() {
        AWS.config.loadFromPath(path.join(__dirname + '/../../../config-aws.json'));
        this._docClient = new AWS.DynamoDB.DocumentClient();
    }

    /**
     * Updates an object
     * @param params 
     */
    public putObject(params:any): any {
        return new Promise<any> ((resolve, reject) => {
            try {
                this._docClient.put(params, (err, result) => {
                    if(err) {
                        reject(err);
                    } else {
                        console.log(result);
                        resolve(result);
                    }
                });
            } catch(ex) {
                reject(ex);
            }
        });
    };
    
    /**
     * Returns an object
     * @param params 
     */
    public getObject(params:any): any {
        return new Promise<any> ((resolve, reject) => {
            try {
                this._docClient.get(params, (err, result) => {
                    if(err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                });
            } catch(ex) {
                reject(ex);
            }
        });
    };
}