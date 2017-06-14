import {Request, Response, NextFunction} from "express";

export let isValidToken = (req: Request, res: Response, next : NextFunction) => {
    if (true) {
        console.log('validated token');
        return next();
    }
    // unauthorised
    //res.status(401).send();
};