import { UserController } from "../../services/user/controllers/user.controller";
import { UserInject } from "../../services/user/core/user.inject";
import { RequestUtil } from "../utils/request.util";

import database from "../utils/database/database.util";

const request: RequestUtil = new RequestUtil();

const userController: UserController = new UserInject(
  database
).getUserController();

export { userController };
