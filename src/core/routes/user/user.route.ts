import { Router } from "express";

import { userController } from "../../inject/inject";

const userRoute = Router();

userRoute
  .route("/usuario")
  .post((req, res) => userController.createUser(req, res));

userRoute
  .route("/usuario/:id")
  .delete((req, res) => userController.deleteUser(req, res))
  .put((req, res) => userController.updateUser(req, res))
  .get((req, res) => userController.readUser(req, res));

userRoute
  .route("/usuarios")
  .get((req, res) => userController.listUser(req, res));

export default userRoute;
