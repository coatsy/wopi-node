"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const linq = require("linq");
function PopulateActions(files) {
    if (files.length > 0) {
        files.forEach(file => {
            PopulateActions(file);
        });
    }
    function PopulateActions(file) {
        let actions = GetDiscoveryInfo();
        let fileExt = path.extname(file.BaseFileName);
        file.Actions = linq.from(actions)
            .where(i => i.ext == fileExt)
            .orderBy(i => i.isDefault)
            .toArray();
    }
    function GetDiscoveryInfo() {
        let actions = new Array();
        // have we already got the actions from WOPI Discovery?
        let finalActions = actions;
        return finalActions;
    }
}
exports.PopulateActions = PopulateActions;
//# sourceMappingURL=WopiUtil.js.map