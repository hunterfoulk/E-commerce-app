const router = require("express").Router();
const express = require("express");
let Clothes = require("../models/clothesmodel");

router.route("/products").get((req, res) => {
  let query = {};

  //build filter query
  if (req.query.category) query.category = req.query.category;
  if (req.query.gender) query.gender = req.query.gender;

  Clothes.find(query)
    .then(clothes => res.json(clothes))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/create").post((req, res) => {
  Clothes.create(req.body).then(
    response => {
      res.json(response);
    },
    error => {
      res.status(400).json(error);
    }
  );
});

router.route("/update").post((req, res) => {
  Clothes.updateMany({ gender: "FAMALE" }, { $set: { gender: "WOMEN" } }).then(
    response => {
      res.json(response);
    },
    error => {
      res.status(400).json(error);
    }
  );
});

module.exports = router;
