import { UserController } from "../../services/user/controllers/user.controller";
import { UserInject } from "../../services/user/core/user.inject";

const userController: UserController = new UserInject().getUserController();

export { userController };
