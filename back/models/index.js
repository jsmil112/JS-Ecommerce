const Cart = require('./Cart');
const Product = require('./Product');
const Review = require('./Review');
const User = require('./User');

Cart.belongsToMany(Product, {
    through: "Product_Cart",
    // foreignKey: "cartId",
    // otherKey: "productId"
  });
Product.belongsToMany(Cart, {
    through: "Product_Cart"
  //   // foreignKey: "cartId",
  //   // otherKey: "productId"
  });

Product.hasMany(Review);

User.hasOne(Cart, { as: "currentCart" });

User.hasMany(Cart, { as: "history" });
User.hasMany(Review);

module.exports = {Cart, Product, Review, User};