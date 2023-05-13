import {Request, Response} from "express";
import {addViews, findById, findByLimitAndCounter, findByNameWithLimit, findLength} from "../services/mysql-service";
import {Book} from "../models/types";

export async function getAll(req: Request, res: Response): Promise<void> {
    const limit: number = +(process.env.limit || 12);
    const counter: number = +(req.query.counter || 0);
    const search = req.query.search
    const length: number = await findLength();
    const books: Book[] = search != undefined ?
        await findByNameWithLimit("%" + search + "%") :
        await findByLimitAndCounter(limit, counter);
    res.render('index', {
        books,
        prev: counter >= limit,
        next: counter < length - limit,
        counter,
        limit
    })
}

export async function getBook(req: Request, res: Response): Promise<void> {
    const book: Book = await findById(+req.params.id)
    addViews(book.id).then(() => res.render('book', {book}))
}