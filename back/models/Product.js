const S = require("sequelize");
const db = require("../config/db");

const Cart = require("./Cart");
const Review = require("./Review");

class Product extends S.Model {}

Product.init(
  {
    name: {
      type: S.STRING,
      notEmpty: true,
      get() {
        let sArray = this.getDataValue("name").split(" ");
        sArray = sArray.map(word => {
          let eachWord = word.split("");
          eachWord[0] = eachWord[0].toUpperCase();
          eachWord = eachWord.join("");
          return eachWord;
        });
        return sArray.join(" ");
      }
    },
    price: {
      type: S.INTEGER,
      notEmpty: true,
      get() {
        return "$" + this.getDataValue("price");
      }
    },
    description: {
      type: S.TEXT,
      notEmpty: true
    },
    stock: {
      type: S.INTEGER,
      defaultValue: 0
    },
    image: {
      type: S.TEXT,
      notEmpty: true
    },
    rating: {
      type: S.INTEGER,
      defaultValue: 10 //needs to be changed for a getter or setter.
    },
    active: {
      type: S.BOOLEAN,
      set() {
        if (this.getDataValue("stock") === 0)
          this.setDataValue("active", false);
      }
    }
  },
  { sequelize: db, modelName: "product" }
);

module.exports = Product;
