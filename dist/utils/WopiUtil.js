"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = require("../config");
const WopiAction = require("./WopiAction");
const path = require("path");
const linq = require("linq");
const cache = require("memory-cache");
const http = require("request");
const xml2js = require("xml2js");
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
        // look up the actions in the cache
        let actions = cache.get(config.Constants.WOPI_DISCOVERY_CACHE_KEY);
        // have we not already got the actions from WOPI Discovery?
        if (actions == null || actions.length == 0) {
            let rawXML = '';
            // hit the WOPI discovery endpoint
            http.get(config.Constants.WOPI_DISCOVERY_ENDPOINT, function (error, response, body) {
            })
                .on('data', function (data) {
                rawXML = rawXML + data;
            })
                .on('end', function () {
                xml2js.parseString(rawXML, { attrNameProcessors: [stripHyphens], tagNameProcessors: [stripHyphens] }, function (err, result) {
                    console.log(result);
                    console.log(result.wopidiscovery.netzone[0].app);
                    actions = new Array();
                    for (var i = 0; i < result.wopidiscovery.netzone[0].app.length; i++) {
                        var thisApp = result.wopidiscovery.netzone[0].app[i];
                        for (var j = 0; j < thisApp.$.length; j++) {
                            var thisAction = thisApp.$[j];
                            let thisWopiAction = new WopiAction.WopiAction();
                            thisWopiAction.app = thisApp.name;
                            thisWopiAction.favIconUrl = thisApp.favIconUrl;
                            thisWopiAction.checkLicense = (thisApp.checkLicense == 'True');
                            thisWopiAction.name = thisAction.name;
                            thisWopiAction.ext = (thisAction.ext != null) ? thisAction.ext : '';
                            thisWopiAction.progId = (thisAction.progId != null) ? thisAction.progId : '';
                            thisWopiAction.isDefault = (thisAction.default != null) ? true : false;
                            thisWopiAction.urlsrc = thisAction.urlsrc;
                            thisWopiAction.requires = (thisAction.requires != null) ? thisAction.requires : '';
                            actions.push(thisWopiAction);
                        }
                    }
                    // cache the actions
                    cache.put(config.Constants.WOPI_DISCOVERY_CACHE_KEY, actions, config.Constants.WOPI_DICCOVERY_CACHE_TTL);
                    let finalActions = actions;
                    return finalActions;
                });
            });
        }
        else {
            let finalActions = actions;
            return finalActions;
        }
    }
    function stripHyphens(name) {
        return name.replace('-', '');
    }
}
exports.PopulateActions = PopulateActions;
//# sourceMappingURL=WopiUtil.js.map