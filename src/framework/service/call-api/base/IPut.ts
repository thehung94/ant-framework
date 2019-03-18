export interface IPut {
    /**
     * Put request
     * @param body 
     * @param token 
     */
    put(body: any, token: string): Promise<any>;
}