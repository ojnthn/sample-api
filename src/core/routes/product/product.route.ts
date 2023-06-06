import { Router } from "express";

import { productController } from "../../inject/inject";

const productRoute = Router();

productRoute
  .route("/produto")
  .post((req, res) => productController.createProduct(req, res));

productRoute
  .route("/produto/:id")
  .delete((req, res) => productController.deleteProduct(req, res))
  .put((req, res) => productController.updateProduct(req, res))
  .get((req, res) => productController.readProduct(req, res));

productRoute
  .route("/produtos")
  .get((req, res) => productController.listProduct(req, res));

export default productRoute;
