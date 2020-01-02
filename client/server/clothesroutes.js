const router = require("express").Router();
const express = require("express");
let Clothes = require("./models/clothesmodel.js");

router.route("/products").get((req, res) => {
  Clothes.find({ category: req.categoryId })
    .then(clothes => res.json(clothes))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/create").post((req, res) => {
  Clothes.create(data).then(
    response => {
      callback(null, response);
    },
    error => {
      callback(error, null);
    }
  );
});

/*router.route("/mensjeans").get((req, res) => {
  Clothes.find()
    .then(clothes => res.json(clothes))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/mensshorts").get((req, res) => {
  Clothes.find()
    .then(clothes => res.json(clothes))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/womensshirts").get((req, res) => {
  Clothes.find()
    .then(clothes => res.json(clothes))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/womensjeans").get((req, res) => {
  Clothes.find()
    .then(clothes => res.json(clothes))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/womensshorts").get((req, res) => {
  Clothes.find()
    .then(clothes => res.json(clothes))
    .catch(err => res.status(400).json("Error: " + err));
});*/

module.exports = router;
