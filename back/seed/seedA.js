const {Product, Category} = require("../models/index")
const S = require("sequelize")
const Op = S.Op

// Adding relations
    Category.findOne({where: {categoryName: "pants"}}).then((category => {
      Product.findAll({where: {category: {[Op.contains]: ['pants'] }}}).then(products =>{
        category.setProduct(products);
      })
    }))

    Category.findOne({where: {categoryName: "shirts"}}).then((category => {
      Product.findAll({where: {category: {[Op.contains]: ['shirts'] }}}).then(products =>{
        category.setProduct(products);
      })
    }))

    Category.findOne({where: {categoryName: "dresses"}}).then((category => {
      Product.findAll({where: {category: {[Op.contains]: ['dresses'] }}}).then(products =>{
        category.setProduct(products);
      })
    }))

    Category.findOne({where: {categoryName: "black"}}).then((category => {
      Product.findAll({where: {category: {[Op.contains]: ['black'] }}}).then(products =>{
        category.setProduct(products);
      })
    }))

    Category.findOne({where: {categoryName: "red"}}).then((category => {
      Product.findAll({where: {category: {[Op.contains]: ['red'] }}}).then(products =>{
        category.setProduct(products);
      })
    }))

    Category.findOne({where: {categoryName: "blue"}}).then((category => {
      Product.findAll({where: {category: {[Op.contains]: ['blue'] }}}).then(products =>{
        category.setProduct(products);
      })
    }))

    /* 
    
    magic methods of category:

    getProduct: [Function]
    countProduct: [Function]
    hasProduct: [Function]
    setProduct: [Function]
    addProduct: [Function]
    removeProduct: [Function]
    createProduct: [Function] 

    */


   Product.findOne({where:{name: 'black shirt'}}).then(product=>{
    product.createReview({rating: 5, comment: "Very Nice"});
    product.createReview({rating: 8, comment: "Amazing!!"});
  })
  Product.findOne({where:{name: 'blue shirt'}}).then(product=>{
    product.createReview({rating: 3, comment: "Very Nice"});
    product.createReview({rating: 8, comment: "Amazing!!"});
  })
  Product.findOne({where:{name: 'red pants'}}).then(product=>{
    product.createReview({rating: 5, comment: "Very Nice"});
    product.createReview({rating: 8, comment: "Amazing!!"});
  })
  Product.findOne({where:{name: 'black dress'}}).then(product=>{
    product.createReview({rating: 5, comment: "Very Nice"});
    product.createReview({rating: 8, comment: "Amazing!!"});
  })

     
/*
magic methods of Product

getCategories: [Function],
countCategories: [Function],
hasCategory: [Function],
hasCategories: [Function],
setCategories: [Function],
addCategory: [Function],
addCategories: [Function],
removeCategory: [Function],
removeCategories: [Function],
createCategory: [Function],
getCarts: [Function],
countCarts: [Function],
hasCart: [Function],
hasCarts: [Function],
setCarts: [Function],
addCart: [Function],
addCarts: [Function],
removeCart: [Function],
removeCarts: [Function],
createCart: [Function],
getReviews: [Function],
countReviews: [Function],
hasReview: [Function],
hasReviews: [Function],
setReviews: [Function],
addReview: [Function],
addReviews: [Function],
removeReview: [Function],
removeReviews: [Function],
createReview: [Function] }

*/