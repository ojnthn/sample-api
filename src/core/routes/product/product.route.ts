import { Router } from "express";

import { productController } from "../../inject/inject";

const productRoute = Router();

productRoute
  .route("/product")
  .post((req, res) => productController.createProduct(req, res));

productRoute
  .route("/product/:id")
  .delete((req, res) => productController.deleteProduct(req, res))
  .put((req, res) => productController.updateProduct(req, res))
  .get((req, res) => productController.readProduct(req, res));

productRoute
  .route("/products")
  .get((req, res) => productController.listProduct(req, res));

export default productRoute;
