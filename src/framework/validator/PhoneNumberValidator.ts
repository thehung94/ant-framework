export class PhoneNumberValidator {

    /**
     * Validates the phone number
     * @param PhoneNumber 
     */
    public static validate(PhoneNumber: string): string {
        if(PhoneNumber.match("(^[+]841[0-9]{9})|(^[+]84[1-9][0-9]{8})")){
            return PhoneNumber;
        } else if(PhoneNumber.match("(^841[0-9]{9})|(^84[1-9][0-9]{8})")) {
            return "+" + parseInt(PhoneNumber);
        }
        else{
            return "+84" + parseInt(PhoneNumber);
        }
    }
}