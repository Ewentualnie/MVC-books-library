import {Request, Response} from "express";
import fs from "fs";
import {findByLimitAndCounter, findLength} from "../services/mysql-service";
import {Book} from "../models/types";
import {IncomingForm} from "formidable";

export async function getAll(req: Request, res: Response) {
    const middlePage: number = 2;
    const limit: number = +(process.env.adminLimit || 5);
    const page: number = +(req.query.page || 0);
    const length: number = await findLength();
    const pageCount: number = Math.ceil(length / limit);
    const buttonCount: number = 5;
    const books: [Book] = await findByLimitAndCounter(limit, page * limit)
    res.render('admin', {
        books,
        pageCount,
        prev: page >= middlePage,
        next: page <= pageCount - middlePage - 1,
        page,
        buttonCount
    })
}

export async function addBook(req: Request, res: Response) {
    const form = new IncomingForm();
    form.parse(req, function (err, fields, files) {
        const book: Book = {
            name: req.body.name,
            year: req.body.year,
            author: req.body.author1,
            preview: req.body.preview,
            description: req.body.description,
            title: req.body.author2
        };
        console.log(book)
        console.log(files.preview)
    });
    // console.log(await save(book))
    res.redirect('..')
}

export function deleteBook(req: Request, res: Response) {

}

export function getFront(req: Request, res: Response) {
    fs.readFile('./dist/front/admin.js', 'utf-8', (err, data) => res.send(data))
}