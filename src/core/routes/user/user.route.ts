import { Router } from "express";

import { userController } from "../../inject/inject";

const userRoute = Router();

userRoute
  .route("/user")
  .post((req, res) => userController.createUser(req, res));

userRoute
  .route("/user/:id")
  .delete((req, res) => userController.deleteUser(req, res))
  .put((req, res) => userController.updateUser(req, res))
  .get((req, res) => userController.readUser(req, res));

userRoute.route("/users").get((req, res) => userController.listUser(req, res));

export default userRoute;
