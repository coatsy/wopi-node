import * as express from "express";
import * as dotenv from "dotenv";
// import * as compression from "compression";
import * as logger from "morgan";
import * as bodyParser from "body-parser";
import expressValidator = require("express-validator");
import * as session from "express-session";
import * as path from "path";

dotenv.config();

// controllers
import * as homeController from "./controllers/home";

const app = express();
app.set("port", process.env.PORT || 3000);
// app.use(compression());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressValidator());
app.use(express.static(path.join(__dirname, "public"), { maxAge: 31557600000 }));

// Routes
app.route("/")
    .get(homeController.index)
    ;

// start the server
app.listen(app.get("port"), () => {
  console.log(("  App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
  console.log("  Press CTRL-C to stop\n");
});