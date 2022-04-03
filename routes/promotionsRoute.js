const express = require("express");
const Promotions = require("../models/promotions");

const promotionsRoute = express.Router();

promotionsRoute.get("/", (req, res) => {
  Promotions.find({})
  .then((promotions) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(promotions);
  }, (err) => next(err))
  .catch((err) => next(err));
});

promotionsRoute.get("/:promoId", (req, res) => {
  Promotions.findById(req.params.promoId)
  .then((promotions) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(promotions);
  }, (err) => next(err))
  .catch((err) => next(err));
});

promotionsRoute.post("/", (req, res) => {
  Promotions.create(req.body)
    .then((promotion) => {
        console.log('Promotion Created ', promotion);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(promotion);
    }, (err) => next(err))
    .catch((err) => next(err));
});

promotionsRoute.put("/:promoId", (req, res) => {
  res.write(`Updating the promotion: ${req.params.promoId} \n`);
  res.end(
    `Will Update the promotion: ${req.body.name} with details: ${req.body.description}`
  );
});

promotionsRoute.put("/", (req, res) => {
  res.status(403).send(`Put request is not supported on /promotions`);
});

promotionsRoute.delete("/", (req, res) => {
  Promotions.remove({})
  .then((resp) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp);
  }, (err) => next(err))
  .catch((err) => next(err)); 
});

promotionsRoute.delete("/:promoId", (req, res) => {
  Promotions.findByIdAndRemove(req.params.promoId)
  .then((resp) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp);
  }, (err) => next(err))
  .catch((err) => next(err)); 
});

module.exports = promotionsRoute;