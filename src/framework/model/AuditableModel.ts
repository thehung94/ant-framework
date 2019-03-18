import { BaseModel } from "./BaseModel";

export abstract class AuditableModel extends BaseModel {
    /**
     * Date and time on creation
     */
    public CreatedDate: string;
    
    /**
     * Date and time on last modification
     */
    public LastUpdatedDate: string;

    /**
     * Deleted flag
     */
    public Deleted: boolean;
}

export default AuditableModel;