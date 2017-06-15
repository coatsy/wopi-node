"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileRequestHandler = (req, res) => {
    console.log('Handling ' + req.method + ' request for file/folder id ' + req.params["id"]);
    res.status(200).send({ 'title': 'fileHandler', 'method': req.method, 'id': req.params['id'] });
};
//# sourceMappingURL=files.js.map