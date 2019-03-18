import { BaseDataProvider } from "../dataprovider/base/BaseDataProvider";

export abstract class  BaseService {
    /**
     * Defines a data provider
     */
    protected dataProvider: BaseDataProvider;

    constructor() {
        
    }
}