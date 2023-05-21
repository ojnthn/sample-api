import { Router } from "express";
import { userController, productController } from "./core/inject/inject";

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
route.put("/user/:id", (req, res) => {
  return userController.updateUser(req, res);
});
route.get("/users", (req, res) => {
  return userController.listUser(req, res);
});

route.post("/product", (req, res) => {
  return productController.createProduct(req, res);
});
route.get("/product/:id", (req, res) => {
  return productController.readProduct(req, res);
});
route.delete("/product/:id", (req, res) => {
  return productController.deleteProduct(req, res);
});
route.put("/product/:id", (req, res) => {
  return productController.updateProduct(req, res);
});
route.get("/products", (req, res) => {
  return productController.listProduct(req, res);
});

export { route };
