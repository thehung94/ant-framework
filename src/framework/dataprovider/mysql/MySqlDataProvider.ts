import { MySqlHelper } from "../../helper/MySqlHelper";
import { BaseDataProvider } from "../base/BaseDataProvider";
import { AppCommon } from "../../../AppCommon";

export abstract class MySqlDataProvider extends BaseDataProvider {
    /**
     * Defines a MySql Helper
     */
    protected mySqlHelper: MySqlHelper;

    /**
     * Allows to initialize a MySqlDataProvider object
     */
    constructor(){
        super(AppCommon.DATABASE_TYPE_MYSQL);
        this.mySqlHelper = new MySqlHelper();
    }
}

export default MySqlDataProvider;