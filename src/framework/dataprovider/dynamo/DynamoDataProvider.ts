import { DynamoHelper } from "../../helper/DynamoHelper";
import { BaseDataProvider } from "../base/BaseDataProvider";
import { AppCommon } from "../../../AppCommon";

export class DynamoDataProvider extends BaseDataProvider {
    /**
     * Defines a DynamoHelper object
     */
    protected dynamoHelper: DynamoHelper;
    
    /**
     * Allows to initialize a DynamoDataProvider object
     */
    constructor() {
        super(AppCommon.DATABASE_TYPE_DYNAMO);
        this.dynamoHelper = new DynamoHelper();
    }
}

export default DynamoDataProvider;