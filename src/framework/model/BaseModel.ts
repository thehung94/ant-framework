import { BaseEntity } from "./BaseEntity";

export abstract class BaseModel extends BaseEntity {
    /**
     * Id
     */
    public Id?: string;
}

export default BaseModel;