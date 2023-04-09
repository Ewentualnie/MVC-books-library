import {Request, Response} from "express";
import fs from "fs";
import {findByLimitAndCounter, findLength, save} from "../services/mysql-service";
import {Book} from "../models/types";
import {UploadedFile} from 'express-fileupload'
import {source} from "../index";

export async function getAll(req: Request, res: Response) {
    const buttonCount: number = Math.abs(+(process.env.buttonCount || 5));
    const middlePage: number = Math.ceil(buttonCount / 2);
    const limit: number = Math.abs(+(process.env.adminLimitPerPage || 5));
    const page: number = +(req.query.page || 0);
    const length: number = await findLength();
    const pageCount: number = Math.ceil(length / limit);
    const books: [Book] = await findByLimitAndCounter(limit, page * limit)

    let start: number = 0, end: number = buttonCount;
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
    if (req.files && !Array.isArray(req.files.preview)) {
        const preview: UploadedFile = req.files.preview;
        const path = source + '/books-page_files/' + preview.name
        const book: Book = {
            author: req.body.author1,
            description: req.body.description,
            name: req.body.name,
            preview: preview.name,
            title: req.body.name,
            year: req.body.year
        }
        preview.mv(path, (err) => {
            if (err) {
                res.status(400).end(JSON.stringify({error: "can't add this preview image"}))
            }
        })
        console.log(await save(book));
        res.redirect('..')
    } else {
        res.status(400).end(JSON.stringify({error: "can't add this book"}))
    }
}

export function deleteBook(req: Request, res: Response) {

}

export function getFront(req: Request, res: Response) {
    fs.readFile('./dist/front/admin.js', 'utf-8', (err, data) => res.send(data))
}