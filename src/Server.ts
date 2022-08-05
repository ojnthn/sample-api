import { app } from "./App";
import Http from "http";

let server;

server = Http.createServer(app).listen(3000, () => {
  console.log(`[LOG] Running in http://localhost:3000`);
});
