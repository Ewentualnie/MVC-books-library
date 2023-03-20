import {Request, Response} from "express";
import database from "../utils/db-connection";
import {queryAll, queryBook} from "../utils/db-queries";

export const getAll = async (req: Request, res: Response) =>
    res.render('index', {books: (await database.query(queryAll))[0]})

export const getBook = async (req: Request, res: Response) =>
    res.render('book', {book: (await database.query(queryBook + +req.params.id))[0][0]})