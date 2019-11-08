const express = require("express");
const logger = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const app = express();
const chalk = require("chalk");
const db = require("./config/db");
const passportConfig = require("./config/passport");
const routes = require("./routes");

//run this code if seed doesn't run
const { Cart, User, Product, Review } = require("./models/index");

require("dotenv").config();

require("dotenv").config();

app.set("view engine", "html");

// MIDDLEWARE
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "/public")));
app.use(session({ secret: "yo!", resave: true, saveUninitialized: true }));
app.use(passportConfig.initialize());
app.use(passportConfig.session());

//TODO ADD CATCHES TO ROUTES

app.use("/api", routes);
app.get("/*", function(req, res, next) {
  res.sendFile(path.join(__dirname, "./public/index.html"))
})

db.sync({ force: false })
  .then(() => {
    console.log(chalk.bgGreen(chalk.black("Connected to database." + "")));
    app.listen(process.env.PORT, () =>
      console.log(
        chalk.bgBlack(
          `Server listening now on ` +
            chalk.bgBlue(`port ${process.env.PORT}`) +
            ""
        )
      )
    );
  })
  .catch(err => console.log(chalk.red(`Problem starting the app`, err)));
