import express from "express";

export const server = express();

server.get("/", (req, res) => {
  return res.send("Ola mundo, servidor rodando");
});
