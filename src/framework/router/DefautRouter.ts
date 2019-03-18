import { BaseRouter } from "./BaseRouter";

export class DefaultRouter extends BaseRouter {
    /**
     * Allows to inititalize LoanCreditRouter object
     */
    constructor() {
        super("default");
        // Init all routes
        this.init();
    }
    
    protected init(): void {
        this.Router.use((req, res, next) => {
            res.json({
                StatusCode: 404,
                Message: "Truy vấn không hợp lệ!"
            });
        });
    }
}

export default new DefaultRouter();