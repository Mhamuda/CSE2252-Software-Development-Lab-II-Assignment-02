const express = require("express");
const Leaders = require("../models/leaders");
const leadersRoute = express.Router();

leadersRoute.get("/", (req, res) => {
  Leaders.find({})
    .then((leaders) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(leaders);
    }, (err) => next(err))
    .catch((err) => next(err));
});

leadersRoute.get("/:leaderId", (req, res) => {
  Leaders.findById(req.params.leaderId)
  .then((leaders) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(leaders);
  }, (err) => next(err))
  .catch((err) => next(err));
});

leadersRoute.post("/", (req, res) => {
  Leaders.create(req.body)
    .then((leader) => {
        console.log('Leader Created ', leader);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(leader);
    }, (err) => next(err))
    .catch((err) => next(err));
});

leadersRoute.post("/:leaderId", (req, res) => {
  res
    .status(403)
    .send(`Post request not supported on /leaders/${req.params.leaderId}`);
});

leadersRoute.put("/:leaderId", (req, res) => {
  res.write(`Updating the leader: ${req.params.leaderId}`);
  res.end(`Leader: ${req.body.name} with details: ${req.body.description}`
  );
});

leadersRoute.put("/", (req, res) => {
  res.status(403).send(`Put request not supported on /leaders`);
});

leadersRoute.delete("/", (req, res) => {
  Leaders.remove({})
  .then((resp) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp);
  }, (err) => next(err))
  .catch((err) => next(err));
});

leadersRoute.delete("/:leaderId", (req, res) => {
  Leaders.findByIdAndRemove(req.params.leaderId)
  .then((resp) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp);
  }, (err) => next(err))
  .catch((err) => next(err)); 
});

module.exports = leadersRoute;