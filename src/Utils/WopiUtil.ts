import * as config from '../config';
import * as WopiAction from './WopiAction'
import * as path from 'path';
import * as linq from 'linq';
import * as models from '../models/detailedfile';
import * as xml from 'xml';
import * as cache from 'memory-cache';
import * as http from 'request';
import * as xml2js from 'xml2js';

export function PopulateActions(files: ReadonlyArray<models.DetailedFile>) {
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
        if (actions == null) {

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
                });
            });
            

            
            // cache the actions
            cache.put(config.Constants.WOPI_DISCOVERY_CACHE_KEY, actions, config.Constants.WOPI_DICCOVERY_CACHE_TTL);
        }


        let finalActions : ReadonlyArray<WopiAction.WopiAction> = actions;
        return finalActions;
    }

        function stripHyphens(name: string){
        return name.replace('-', '');
    }
}