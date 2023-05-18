import express from "express";
import { route } from "./router";

const app = express();

app.use(express.json());

app.use(route);

app.listen(3000, () => console.log("🔥 Server running on port 3000 🔥"));
