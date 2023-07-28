import { Router } from "express";

import { userController } from "../../injects/inject";

const userRoute = Router(); // Cria uma instância de rotas do Express

userRoute
  // Rota para criar um usuário
  .route("/usuario")
  // Method: POST
  // Path: http://localhost:3001/usuario
  .post((req, res) => userController.createUser(req, res));

userRoute
  // Rota para deletar, atualizar e ler um usuário
  .route("/usuario/:id")
  // Method: DELETE
  // Path: http://localhost:3001/usuario/1
  .delete((req, res) => userController.deleteUser(req, res))
  // Method: PUT
  // Path: http://localhost:3001/usuario/1
  .put((req, res) => userController.updateUser(req, res))
  // Method: GET
  // Path: http://localhost:3001/usuario/1
  .get((req, res) => userController.readUser(req, res));

userRoute
  // Rota para listar todos os usuários
  .route("/usuarios")
  // Method: GET
  // Path: http://localhost:3001/usuarios
  .get((req, res) => userController.listUser(req, res));

export default userRoute;
