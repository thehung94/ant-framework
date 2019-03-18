import * as mysql from 'mysql';

const MysqlConfig = require('../../../config-mysql.json'); 

export class MySqlHelper {
    /**
     * Defines a MySql pool
     */
    private _pool: mysql.Pool;

    /**
     * Allows to initialize a MySqlHelper object
     */
    constructor() {
        this._pool = mysql.createPool(MysqlConfig);
    }
    
    /**
     * Commits the changes of a model
     * @param model 
     */
    public commit(model: any): any {
        return new Promise<void>(async (resolve, reject) => {
            this._pool.getConnection(async (err, connection) => {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    let values = [];
                    let sqlQuery = "";
                    let attributes = Object.getOwnPropertyNames(model);
                    let tableName = model.getTableName();
                    if(!model){
                        reject("Model is empty!");
                    }
                    
                    // Generate a query string
                    // CASE 1: UPDATE
                    if (model && model.Id) {
                        sqlQuery = "UPDATE " + tableName + " SET ";
                        await attributes.forEach((element, index) => {
                            if(element != "Id"){
                                if(index == 1){
                                    sqlQuery+=  element + " = ?";
                                }
                                else {
                                    sqlQuery+= ", " + element + " = ?";
                                }
                                values.push(model[element]);
                            }
                        });
                        sqlQuery+= " WHERE Id = ?";
                        values.push(model.Id);
                    } 
                    // CASE 2: INSERT
                    else {
                        sqlQuery = "INSERT INTO " + tableName + " (";
                        let colums = "";
                        let value = " VALUE (";
                        await attributes.forEach((element, index) => {
                            if(element != "Id"){
                                if(index == 1){
                                    colums+=  element;
                                    value+= "?"
                                }
                                else {
                                    value+= ", ?"
                                    colums+= ", " + element;
                                }

                                if(++index == attributes.length) {
                                    colums+= ") ";
                                    value+= ")"
                                }
                                values.push(model[element]);
                            }
                        });
                        sqlQuery = sqlQuery + colums + value;
                    }

                    // Execute the generated query
                    await connection.query(sqlQuery, values, (error, result) => {
                        if (error) {
                            console.log(error);
                            reject(error);
                        } else {
                            resolve(result);
                        }
                        connection.destroy();
                    });
                }
            });            
        });            
    }

    /**
     * Excutes a query
     * @param sqlQuery 
     * @param params 
     */
    public async execute(sqlQuery: string, params: any[]): Promise<any> {
        return new Promise<any> ((resolve, reject) => {
            this._pool.getConnection(async (err, connection) => {
                if(err) {
                    reject(err);
                } else {
                    connection.query(sqlQuery, params, (error, result) => {
                        if(error) {
                            console.log(error);
                            reject(error);
                        } else {
                            resolve(result);
                        }
                        connection.destroy();
                    });
                }
            });
        });
    }
}

export default MySqlHelper;