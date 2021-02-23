import express from "express";

const app = express();

/**
 * GET
 * POST
 * PUT
 * DELETE
 * PATCH
 */

//Criação de métodos, primeiramente a Rota, depois request e response//

app.get("/users", (request, response) => {
  return response.json({ message: "Hello World - NLW04" });
});

app.post("/", (request, response) => {
  return response.json({ message: "Os dados foram salvos com sucesso!" });
});

app.listen(3333, () => console.log("Seu servidor está rodando!"));
