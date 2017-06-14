"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const dotenv = require("dotenv");
// import * as compression from "compression";
const logger = require("morgan");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const path = require("path");
dotenv.config();
// controllers
const homeController = require("./controllers/home");
const filesController = require("./controllers/files");
// token security code
const tokenValidator = require("./security/tokenValidator");
const app = express();
app.set("port", process.env.PORT || 3000);
// app.use(compression());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(express.static(path.join(__dirname, "public"), { maxAge: 31557600000 }));
// Routes
app.route("/")
    .get(homeController.index);
// routing parameters are explained here: http://expressjs.com/en/guide/routing.html
app.route('/wopi/files/:id')
    .all(tokenValidator.isValidToken)
    .get(filesController.fileRequestHandler)
    .post(filesController.fileRequestHandler);
app.route('/wopi/files/:id/contents')
    .all(tokenValidator.isValidToken)
    .get(filesController.fileRequestHandler)
    .post(filesController.fileRequestHandler);
app.route('/wopi/folders/:id')
    .all(tokenValidator.isValidToken)
    .get(filesController.fileRequestHandler)
    .post(filesController.fileRequestHandler);
app.route('/wopi/folders/:id/contents')
    .all(tokenValidator.isValidToken)
    .get(filesController.fileRequestHandler)
    .post(filesController.fileRequestHandler);
// start the server
app.listen(app.get("port"), () => {
    console.log(("  App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
    console.log("  Press CTRL-C to stop\n");
});
//# sourceMappingURL=server.js.map