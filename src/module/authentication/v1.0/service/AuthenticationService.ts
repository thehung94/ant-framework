import { BaseService } from "../../../../framework/service/BaseService";
import { MySqlAuthenticationDataProvider } from "../dataprovider/mysql/MySqlAuthenticationDataProvider";
import { DynamoAuthenticationDataProvider } from "../dataprovider/dynamo/DynamoAuthenticationDataProvider";

export class AuthenticationService extends BaseService {
    /**
     * Allows initialize AuthenticationSerivce object
     */
    constructor () {
        super();
        /**
         * Todo uncomment engine database to use function on engine
         */
        // this.dataProvider = new MySqlAuthenticationDataProvider();
        // this.dataProvider = new DynamoAuthenticationDataProvider();
    }
}