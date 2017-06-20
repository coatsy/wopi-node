import * as config from '../config';
import * as models from '../models/detailedfile';
import { wopidiscoveryaction } from '../models/wopidiscoveryaction';
import { wopidiscoveryapp } from '../models/wopidiscoveryapp';
import * as WopiAction from './WopiAction';
import * as path from 'path';
import * as linq from 'linq';
import * as cache from 'memory-cache';
import * as http from 'request';
import * as xml2js from 'xml2js';
import * as wopidiscoveryactionweb from '../models/wopidiscoveryaction'
import * as wopidiscoveryappweb from '../models/wopidiscoveryapp'

export function PopulateActions(files: Array<models.DetailedFile>) {
    if (files.length > 0)
    {
        files.forEach(file => {
            PopulateActions(file);
        });
    }

    function PopulateActions(file: models.DetailedFile) {
        let actions: ReadonlyArray<WopiAction.WopiAction> = GetDiscoveryInfo();
        let fileExt = path.extname(file.BaseFileName);
        file.Actions = linq.from(actions)
            .where(i => i.ext == fileExt)
            .orderBy(i => i.isDefault)
            .toArray();
    }

    function GetDiscoveryInfo() : ReadonlyArray<WopiAction.WopiAction> {

        // look up the actions in the cache
        let actions : Array<WopiAction.WopiAction> = cache.get(config.Constants.WOPI_DISCOVERY_CACHE_KEY);

        // have we not already got the actions from WOPI Discovery?
        if (actions == null || actions.length == 0) {

            let rawXML: string = '';

            // hit the WOPI discovery endpoint
            http.get(config.Constants.WOPI_DISCOVERY_ENDPOINT, function(error, response, body){

            })
            .on('data', function(data){
                rawXML = rawXML + data;
            })
            .on('end', function() {
                xml2js.parseString(rawXML, {attrNameProcessors: [stripHyphens], tagNameProcessors: [stripHyphens]}, function(err, result) {
                console.log(result);
                console.log(result.wopidiscovery.netzone[0].app);
                console.log(result.wopidiscovery.netzone[0].app.length);

                actions = new Array<WopiAction.WopiAction>();

                for (var i = 0; i < result.wopidiscovery.netzone[0].app.length; i++) {
                    let thisApp : wopidiscoveryappweb.wopidiscoveryapp = result.wopidiscovery.netzone[0].app[i];
                    console.log(thisApp.$.name);

                    for (var j = 0; j < thisApp.action.length; j++) {
                        let thisAction : wopidiscoveryactionweb.wopidiscoveryaction = <wopidiscoveryactionweb.wopidiscoveryaction>thisApp.action[j];

                        let myApp = thisApp;

                        let thisWopiAction = new WopiAction.WopiAction();
                        thisWopiAction.app = myApp.$.name;
                        thisWopiAction.favIconUrl = myApp.$.favIconUrl;
                        thisWopiAction.checkLicense = (myApp.$.checkLicense == 'True');
                        thisWopiAction.name = thisAction.$.name;
                        thisWopiAction.ext = (thisAction.$.ext != null) ? thisAction.$.ext : '';
                        thisWopiAction.progId = (thisAction.$.progId != null) ? thisAction.$.progId : '';
                        thisWopiAction.isDefault = (thisAction.$.default != null) ? true : false;
                        thisWopiAction.urlsrc = thisAction.$.urlsrc;
                        thisWopiAction.requires = (thisAction.$.requires != null) ? thisAction.$.requires : '';

                        actions.push(thisWopiAction);
                    }

                }

                // cache the actions
                cache.put(config.Constants.WOPI_DISCOVERY_CACHE_KEY, actions, config.Constants.WOPI_DICCOVERY_CACHE_TTL);

                let finalActions : ReadonlyArray<WopiAction.WopiAction> = actions;
                console.log('retrieved actions from wopi discovery endpoint');
                console.log(actions);
                return finalActions;

                });
            });
            

            
        } else {
            console.log('got actions from cache');
            console.log('actions');
            let finalActions : ReadonlyArray<WopiAction.WopiAction> = actions;
            return finalActions;
        }

    }

    function stripHyphens(name: string){
        return name.replace('-', '');
    }

}