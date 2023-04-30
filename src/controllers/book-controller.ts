import {Request, Response} from "express";
import fs from "fs";

export function getFront(req: Request, res: Response) {
    fs.readFile('dist/front/book.js', 'utf-8', (err, data) => res.send(data))
}