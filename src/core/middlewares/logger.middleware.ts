import { Request, Response, NextFunction } from "express";

// Middleware de log para registrar informações das solicitações
export function loggerMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const timestamp = new Date().toISOString();
  const { method, url, body, query } = req;
  console.log("--------------------");
  // Registro das informações da solicitação no console
  console.log(`[${timestamp}] ${method} ${url}`);
  console.log("Query Parameters:", query);
  console.log("Request Body:", body);
  console.log("--------------------");

  next(); // Chama a próxima função no pipeline do middleware do Express
}
