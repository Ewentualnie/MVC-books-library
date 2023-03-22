import {Request, Response} from "express";
import fs from "fs";
import {findAll} from "../services/mysql-service";

export async function getAll(req: Request, res: Response) {
    res.render('admin', {
        books: await findAll()
    })
}

export function addBook(req: Request, res: Response) {
    console.log(req.body)
    res.redirect('..')
}

export function deleteBook(req: Request, res: Response) {

}

export function getFront(req: Request, res: Response) {
    fs.readFile('./dist/front/admin.js', 'utf-8', (err, data) => res.send(data))
}