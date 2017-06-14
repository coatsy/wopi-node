import {Request, Response} from "express";

export let fileRequestHandler = (req: Request, res: Response) => {

    console.log('Handling ' + req.method + ' request for file/folder id ' + req.params["id"]);
};