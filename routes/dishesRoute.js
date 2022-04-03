const express = require("express");

const dishesRoute = express.Router();


dishesRoute.get("/", (req, res) => {
  res.send("All the dishes will be sent to you");
});

dishesRoute.get("/:dishId", (req, res) => {
  res.send(`Sending the dish of dish Id : ${req.params.dishId}`);
});


dishesRoute.post("/", (req, res) => {
  res.send("Will add the dish: " + req.body.name +" with details: " + req.body.description);
});

dishesRoute.post("/:dishId", (req, res) => {
  res
    .status(403)
    .send(`Post request not Supported on /dishes/${req.params.dishId}`);
});

dishesRoute.put("/:dishId", (req, res) => {
  res.write(`Updating the dish: ${req.params.dishId} \n`);
  res.end(
    `The dish: ${req.body.name} with details: ${req.body.description}`
  );
});

dishesRoute.put("/", (req, res) => {
  res.status(403).send(`Put request not supported on /dishes`);
});

dishesRoute.delete("/", (req, res) => {
  res.send(`All the dishes will be deleted`);
});

dishesRoute.delete("/:dishId", (req, res) => {
  res.send(`Deleting the dish by Id : ${req.params.dishId}`);
});

module.exports = dishesRoute;