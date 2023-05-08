import {Request, Response} from "express";
import fs from "fs";
import {deleteById, findByLimitAndCounter, findLength, saveBook} from "../services/mysql-service";
import {Book} from "../models/types";
import {UploadedFile} from 'express-fileupload'
import {source} from "../index";
import {createBook, createPairsAndAuthors} from "../services/book-service";

export async function getAll(req: Request, res: Response): Promise<void> {
    const buttonCount: number = Math.abs(+(process.env.buttonCount || 5));
    const middlePage: number = Math.ceil(buttonCount / 2);
    const limitPerPage: number = Math.abs(+(process.env.adminLimitPerPage || 6));
    const pageNumber: number = +(req.query.page || 0);
    const dataBaseLength: number = await findLength();
    const pageCount: number = Math.ceil(dataBaseLength / limitPerPage);
    const books: [Book] = await findByLimitAndCounter(limitPerPage, pageNumber * limitPerPage)

    let start: number = 0, end: number = buttonCount;
    if (pageCount > buttonCount) {
        if (pageNumber < middlePage) {
            start = 0;
        } else if (pageNumber > pageCount - middlePage) {
            start = pageCount - buttonCount;
            end = pageCount;
        } else {
            start = pageNumber - middlePage + 1;
            end = start + buttonCount;
        }
    } else {
        end = pageCount;
    }
    res.render('admin', {
        books,
        prev: pageNumber >= middlePage && pageCount > buttonCount,
        next: pageNumber <= pageCount - middlePage - 1 && pageCount > buttonCount,
        page: pageNumber,
        start,
        end
    })
}

export async function addBook(req: Request, res: Response): Promise<void> {
    if (req.files && !Array.isArray(req.files.preview)) {
        const preview: UploadedFile = req.files.preview;
        const path: string = source + '/books-page_files/' + preview.name;
        preview.mv(path, (err) => {
            if (err) {
                res.status(400).end(JSON.stringify({error: "can't add this preview image"}));
            }
        })
        const bookId: number | undefined = await saveBook(createBook(req.body, preview.name));
        if (bookId) {
            await createPairsAndAuthors(req.body, bookId);
            res.redirect('..');
        } else {
            res.status(400).end(JSON.stringify({error: "can't add this book"}));
        }
    } else {
        res.status(400).end(JSON.stringify({error: "can't add book without preview image"}));
    }
}

export async function deleteBook(req: Request, res: Response) {
    if (await deleteById(+req.params.id)) {
        res.send(JSON.stringify({ok: true}));
    } else {
        res.status(400).end(JSON.stringify({error: "can't delete book with id: " + req.params.id}));
    }
}

export function getFront(req: Request, res: Response) {
    fs.readFile('./dist/front/admin.js', 'utf-8', (err, data) => res.send(data))
}