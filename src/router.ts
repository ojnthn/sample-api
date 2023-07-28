import userRoute from "./core/routes/user/user.route";
import productRoute from "./core/routes/product/product.route";

// Array de rotas que será exportado para o arquivo src/index.ts
// para ser registrado no Express
const routes = [userRoute, productRoute];

export { routes };
