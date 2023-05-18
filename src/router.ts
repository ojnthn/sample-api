import { Router } from "express";
import { userController } from "./core/inject/inject";

const route = Router();

route.get("/", (req, res) => {
  res.status(401).json({ message: "Unauthorized" });
});

route.post("/user", (req, res) => {
  return userController.createUser(req, res);
});

route.get("/user/:id", (req, res) => {
  return userController.readUser(req, res);
});

route.delete("/user/:id", (req, res) => {
  return userController.deleteUser(req, res);
});

export { route };
