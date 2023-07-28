import { Router } from "express";

import { productController } from "../../injects/inject";

const productRoute = Router();

productRoute
  // Rota para criar um produto
  .route("/produto")
  // Method: POST
  // Path: http://localhost:3001/produto
  .post((req, res) => productController.createProduct(req, res));

productRoute
  // Rota para deletar, atualizar e ler um produto
  .route("/produto/:id")
  // Method: DELETE
  // Path: http://localhost:3001/produto/1
  .delete((req, res) => productController.deleteProduct(req, res))
  // Method: PUT
  // Path: http://localhost:3001/produto/1
  .put((req, res) => productController.updateProduct(req, res))
  // Method: GET
  // Path: http://localhost:3001/produto/1
  .get((req, res) => productController.readProduct(req, res));

productRoute
  // Rota para listar todos os produtos
  .route("/produtos")
  // Method: GET
  // Path: http://localhost:3001/produtos
  .get((req, res) => productController.listProduct(req, res));

export default productRoute;
