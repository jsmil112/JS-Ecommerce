const express = require("express");
const router = express.Router();
const { Product } = require("../models");
const S = require("sequelize");
const Op = S.Op;

//get all products
router.get("/", function(req, res) {
  Product.findAll({}).then(products => res.status(200).send(products));
});

//get all products with filter
router.get("/filtered/:query", function(req, res) {
  let search = req.params.query;
  let searchLow = search.toLowerCase();
  Product.findAll({
    where: {
      name: { [Op.like]: `%${searchLow}%` }
    }
  }).then(products => {
    console.log(products);
    res.status(200).send(products);
  });
});
//get all products with filter
router.get("/filtered/", function(req, res) {
  Product.findAll({}).then(products => {
    res.status(200).send(products);
  });
});

//get 9 random products
router.get("/random/:number", function(req, res) {
  Product.findAll().then(products => {
    let numProducts = req.params.number;
    let length = products.length;
    let randProducts = [];
    for (let i = 0; i < numProducts; i++) {
      randProducts.push(
        products.splice(Math.floor(Math.random() * length), 1)[0]
      );
      length--;
    }
    res.status(200).send(randProducts);
  });
});

//get single product

//create new product

//edit product

//delete product

module.exports = router;