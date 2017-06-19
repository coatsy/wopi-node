import {Request, Response} from "express";
import { DetailedFile } from '../models/DetailedFile';
import * as utils from '../utils/WopiUtil';

export let fileRequestHandler = (req: Request, res: Response) => {

    console.log('Handling ' + req.method + ' request for file/folder id ' + req.params["id"]);
    res.status(200).send({'title': 'fileHandler', 'method': req.method, 'id': req.params['id']});

    let files = new Array<DetailedFile>();

    let docFile = new DetailedFile();
    docFile.BaseFileName = 'myDocFile.docx';

    let xlFile = new DetailedFile();
    xlFile.BaseFileName = 'myXLFile.xlsx';

    let pptFile = new DetailedFile();
    pptFile.BaseFileName = 'myPPTFile.pptx';

    files.push(docFile);
    files.push(xlFile);
    files.push(pptFile);

    utils.PopulateActions(files);

    console.log(files);

};