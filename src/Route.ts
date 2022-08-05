import { Router } from "express";

import * as Controller from "./Controller";
import { ResponseInterface } from "./Schema/Interface/Response.interface";

const router = Router();

router.get("/usuario/lista", (request, response): ResponseInterface => {
  return new Controller.GetUserList(request, response).handle();
});

export { router };
