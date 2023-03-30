import {Request, Response} from "express";
import fs from "fs";
import {findByLimitAndCounter, findLength} from "../services/mysql-service";
import {Book} from "../models/types";
import {IncomingForm} from "formidable";

export async function getAll(req: Request, res: Response) {
    const buttonCount: number = Math.abs(+(process.env.buttonCount || 5));
    const middlePage: number = Math.ceil(buttonCount / 2);
    const limit: number = Math.abs(+(process.env.adminLimitPerPage || 5));
    const page: number = +(req.query.page || 0);
    const length: number = await findLength();
    const pageCount: number = Math.ceil(length / limit);
    const books: [Book] = await findByLimitAndCounter(limit, page * limit)

    let start = 0, end = buttonCount;
    if (pageCount > buttonCount) {
        if (page < middlePage) {
            start = 0;
        } else if (page > pageCount - middlePage) {
            start = pageCount - buttonCount;
            end = pageCount
        } else {
            start = page - middlePage + 1;
            end = start + buttonCount;
        }
    } else {
        end = pageCount
    }
    res.render('admin', {
        books,
        prev: page >= middlePage && pageCount > buttonCount,
        next: page <= pageCount - middlePage - 1 && pageCount > buttonCount,
        page,
        start,
        end
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