import { Router } from "express";

import { userCategoryController } from "../../inject/inject";

const userCategoryRoute = Router();

userCategoryRoute
  .route("/userCategory")
  .post((req, res) => userCategoryController.createUserCategory(req, res));

userCategoryRoute
  .route("/userCategory/:id")
  .delete((req, res) => userCategoryController.deleteUserCategory(req, res))
  .put((req, res) => userCategoryController.updateUserCategory(req, res))
  .get((req, res) => userCategoryController.readUserCategory(req, res));

userCategoryRoute
  .route("/userCategories")
  .get((req, res) => userCategoryController.listUserCategory(req, res));

export default userCategoryRoute;
