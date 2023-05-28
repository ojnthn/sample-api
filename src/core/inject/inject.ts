import { UserController } from "../../services/user/controllers/user.controller";
import { UserInject } from "../../services/user/core/user.inject";
import { RequestUtil } from "../utils/request.util";

import database from "../utils/database/database.util";
import { ProductController } from "../../services/product/controllers/product.controller";
import { ProductInject } from "../../services/product/core/product.inject";
import { UserCategoryController } from "../../services/user_category/controllers/user_category.controller";
import { UserCategoryInject } from "../../services/user_category/core/user_category.inject";

const request: RequestUtil = new RequestUtil();

const userController: UserController = new UserInject(
  database
).getUserController();

const productController: ProductController = new ProductInject(
  database
).getProductController();

const userCategoryController: UserCategoryController = new UserCategoryInject(
  database
).getUserCategoryController();

export { userController, productController, userCategoryController };
