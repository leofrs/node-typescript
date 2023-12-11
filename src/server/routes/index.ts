import { Router } from "express";

import { cityControllers } from "../controllers";

export const routes = Router();

routes.get("/", (req, res) => {
  return res.send("Ola mundo, servidor rodando");
});

routes.post("/cidades", cityControllers.create);
