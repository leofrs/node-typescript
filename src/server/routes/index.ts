import { Router } from "express";

import { StatusCodes } from "http-status-codes";

export const routes = Router();

routes.get("/", (req, res) => {
  return res.send("Ola mundo, servidor rodando");
});
routes.post("/teste", (req, res) => {
  res.status(StatusCodes.ACCEPTED).send("Ola mundo");
  return console.log(req.body);
});
