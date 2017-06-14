import {Request, Response} from "express";

/**
 * GET /
 * Home page.
 */
export let index = (req: Request, res: Response) => {
    console.log('Hello from ' + req.ip);
  res.json({"title": "Hello " + req.ip});
};