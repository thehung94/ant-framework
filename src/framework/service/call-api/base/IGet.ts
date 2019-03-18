export interface IGet {
    /**
     * Get request
     * @param url 
     * @param token 
     */
    get(url: string, token?: string): Promise<any>;
}