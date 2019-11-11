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
      defaultValue: 0
    },
    active: {
      type: S.BOOLEAN,
      set() {
        if (this.getDataValue("stock") === 0)
          this.setDataValue("active", false);
      }
    },
    category: {
      type: S.ARRAY(S.STRING)
    }
  },
  { sequelize: db, modelName: "product" }
);


// Product.prototype.getRating = async function(){
//   const reviews = await this.getReviews();
//     let numReviews = reviews.length;
//     let sum = 0;
//     reviews.map((review)=>{
//       sum += review.rating;
//     })
//       console.log("PRODUCTGETTER",Math.round((sum / numReviews)) / 2)
//       return (Math.round((sum / numReviews)) / 2)
//   }

module.exports = Product;
