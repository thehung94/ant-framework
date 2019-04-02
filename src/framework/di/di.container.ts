import { Container } from "inversify";
import Localization from "../../language/Localization";
import MySqlHelper from "../helper/MySqlHelper";
import { DynamoHelper } from "../helper/DynamoHelper";
var DIContainer = new Container();

DIContainer.bind<Localization>(Localization).toSelf();
DIContainer.bind<MySqlHelper>(MySqlHelper).toSelf();
DIContainer.bind<DynamoHelper>(DynamoHelper).toSelf();

export default DIContainer;
