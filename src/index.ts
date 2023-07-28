import express from "express";
import { routes } from "./router";
import { loggerMiddleware } from "./core/middlewares/logger.middleware";

const app = express(); // Cria uma instância do Express

app.use(express.json());

// Registra o middleware de log para todas as rotas
app.use(loggerMiddleware);

// Registra as rotas
app.use(routes);

// Inicia o servidor na porta 3001
app.listen(3001, () => console.log("🔥 Server running on port 3001 🔥"));
