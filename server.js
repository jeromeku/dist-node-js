#!/usr/bin/env node

const server = require("fastify");
const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || 8000;
const Recipe = require("./recipe.js");

server.get("/", async (req, rep) => {
  return "Hello there";
});

server.get("/recipes/:id"),
  async (req, rep) => {
    const recipe = new Recipe(req.params.id);
    await recipe.hydrate();
    return recipe;
  };

server.listen(HOST, PORT, (err, host) => {
  console.log(`Server running at ${host}`);
});
