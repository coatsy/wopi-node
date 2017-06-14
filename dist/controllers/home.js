"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
    console.log('Hello from ' + req.ip);
    res.json({ "title": "Hello " + req.ip });
};
//# sourceMappingURL=home.js.map