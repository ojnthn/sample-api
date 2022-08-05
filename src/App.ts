import express from "express";
import { router } from "./Route";

const app = express().use(express.json()).use(router);

export { app };
