import {Request, Response} from "express";
import {findAll, findById, findByLimitAndCounter} from "../services/mysql-service";
import {Book} from "../models/types";

export async function getAll(req: Request, res: Response) {
    const limit: number = +(process.env.limit || 5);
    const counter: number = +(req.query.counter || 0);
    const length: number = (await findAll()).length;
    const books: [Book] = await findByLimitAndCounter(limit, counter)
    res.render('index', {
        books,
        prev: counter >= limit,
        next: counter < length - limit,
        counter,
        limit
    })
}

export async function getBook(req: Request, res: Response) {
    res.render('book', {
        book: await findById(+req.params.id)
    })
}