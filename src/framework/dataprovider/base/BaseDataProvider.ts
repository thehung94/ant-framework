export class BaseDataProvider {

    public DatabaseType: string;

    constructor (databaseType: string) {
        this.DatabaseType = databaseType;
    }
}