const S = require("sequelize");
const db = require("../config/db");

const Product = require("../models/Product");

class Category extends S.Model {}

Category.init(
  {
    categoryName: {
      type: S.STRING,
      notEmpty: true
    }
  },
  { sequelize: db, modelName: "category" }
);

module.exports = Category;
