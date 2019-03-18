import * as crypto from 'crypto'

export class CryptoUtility {
    /**
     * Encrypts a text with hash method
     * @param text 
     */
    public static hash(text: string): string {
        return crypto.createHash("md5").update(text).digest("hex");
    }
}