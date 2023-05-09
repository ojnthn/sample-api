import express from "express";
import { route } from "./router";

const app = express();

app.use(express.json());

app.use(route);

app.listen(3001, () => console.log(":sparkles: server running on port 3001"));
