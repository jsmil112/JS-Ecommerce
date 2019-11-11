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
    res.status(200).send(products);
  });
});
//get all products with filter
router.get("/filtered/", function(req, res) {
  Product.findAll({}).then(products => {
    res.status(200).send(products);
  });
});

//gets all products with category
router.get("/category/:catName", function(req, res) {
  Product.findAll({
    where: { category: { [Op.contains]: [req.params.catName] } }
  }).then(products => {
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

router.get("/:productId", function(req, res, next) {
  Product.findByPk(req.params.productId).then(product => {
    res.send(product);
  });
});
//get single product

router.get("/:productId", function(req, res, next) {
  Product.findByPk(req.params.productId).then(product => {
    product.getReviews().then(reviews => {
      let numReviews = reviews.length;
      let sum = 0;
      reviews.map(review => {
        sum += review.rating;
      });
      product.rating = Math.round(sum / numReviews) / 2;
      res.send(product);
    });
  });
});

//create new product

//edit product

//delete product

module.exports = router;
