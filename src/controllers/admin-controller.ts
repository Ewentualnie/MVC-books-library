import {Request, Response} from "express";
import database from "../utils/db-connection";
import {queryAll} from "../utils/db-queries";
import fs from "fs";

export const getAll = async (req: Request, res: Response) =>
    res.render('admin', {
        books: (await database.query(queryAll))[0]
    })
export const addBook = (req: Request, res: Response) => {
    console.log(req.body)
    res.redirect('..')
}
export const deleteBook = (req: Request, res: Response) => {

}
export const getFront = (req: Request, res: Response) => {
    fs.readFile('./dist/front/admin.js', 'utf-8', (err, data) => res.send(data))
}