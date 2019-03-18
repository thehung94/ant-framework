import * as reqestPromise from 'request-promise-native';

export class RequestService {
    /**
     * Posts data to server
     * @param body
     * @param url
     */
    public async post(url: string, body: any, token: string = ""): Promise<any> {        
        return new Promise<any>((resolve, reject) => {
            let options = {
                url: url,
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": "Bearer " + token
                },
                body: body,
                json: true
            };

            reqestPromise.post(options)
                .then((body) => {
                    resolve(body);
                })
                .catch((error) => {
                    reject(error);
                }
            );
        });
    };

    /**
     * Puts data to server
     * @param body 
     * @param url 
     */
    public async put(body: any, url: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            let options = {
                url: url,
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: body,
                json: true
            };
            
            reqestPromise.put(options)
                .then((body) => {
                    resolve(body);
                })
                .catch((error) => {
                    reject(error);
                }
            );
        });
    }

    /**
     * Gets data from server
     * @param body 
     * @param url 
     */
    public async get(url: string, token: string = ""): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            let options = {
                url: url,
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                json: true
            };
            
            reqestPromise.get(options)
                .then((body) => {
                    resolve(body);
                })
                .catch((error) => {
                    reject(error);
                }
            );
        });
    }
}

export default RequestService;