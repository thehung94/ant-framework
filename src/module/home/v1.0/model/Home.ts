import { AuditableModel } from "../../../../framework/model/AuditableModel";

export class Home extends AuditableModel implements IHomeModel {
    
    /**
     * Allows to initialize User object
     */
    constructor() {
        super();
    }

    /**
     * Set data to object
     * @param homeModel 
     */
    public set(homeModel: IHomeModel) {
        this.Id = homeModel.Id;
    }

    /**
     * Get object
     */
    public get(): Object {
        return this;
    }

    /**
     * Return model table name
     */
    public getTableName(): string {
        return "home";
    }
}

export interface IHomeModel {
    Id?: string;
}