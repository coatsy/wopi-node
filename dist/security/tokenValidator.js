"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidToken = (req, res, next) => {
    if (true) {
        console.log('validated token');
        return next();
    }
    // unauthorised
    //res.status(401).send();
};
//# sourceMappingURL=tokenValidator.js.map