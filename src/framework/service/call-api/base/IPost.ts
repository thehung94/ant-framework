export interface IPost {
    /**
     * Post request
     * @param body 
     * @param token 
     */
    post(body: any, token: string): Promise<any>;
}