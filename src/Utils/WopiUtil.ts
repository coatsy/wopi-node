import * as config from '../config';
import * as WopiAction from './WopiAction'
import * as path from 'path';
import * as linq from 'linq';
import * as models from '../models/detailedfile';
import * as xml from 'xml';

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
        let actions : Array<WopiAction.WopiAction> = new Array<WopiAction.WopiAction>();

        // have we already got the actions from WOPI Discovery?


        let finalActions : ReadonlyArray<WopiAction.WopiAction> = actions;
        return finalActions;
    }
}