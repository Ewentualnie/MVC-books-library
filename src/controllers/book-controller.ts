import {Request, Response} from "express";
import fs from "fs";
import {addClickCount} from "../services/mysql-service";

export async function increaseClickCount(req: Request, res: Response): Promise<void> {
    const result: number = await addClickCount(req.body.id)
    if (result) {
        res.send(JSON.stringify({ok: true}));
    } else {
        res.status(500).end(JSON.stringify({error: "DB error"}))
    }
}

export function getFront(req: Request, res: Response): void {
    fs.readFile('dist/front/book.js', 'utf-8', (err, data) => res.send(data))
}