export class OTPUtility {
    /**
     * Generates a randomize OTP
     */
    public static randomOTP(): string {
        return String(Math.floor(100000 + Math.random() * 900000));
    }
}