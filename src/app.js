const express = require("express");
const cors = require("cors");
const { v4 } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {

  const { title } = request.query;

  const results = title
    ? repositories.filter(repo => repo.title.toLowerCase().includes(title.toLowerCase()))
    : repositories;

  return response.json(results);

});

app.post("/repositories", (request, response) => {

  const { title, url, techs } = request.body;
  const repositorie = { id: v4(), title, url, techs, likes: 0 };
  repositories.push(repositorie);

  return response.status(200).json(repositorie);

});

app.put("/repositories/:id", (request, response) => {
  // TODO
});

app.delete("/repositories/:id", (request, response) => {
  // TODO
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

module.exports = app;
