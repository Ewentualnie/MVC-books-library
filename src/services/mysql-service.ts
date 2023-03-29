import database from "../utils/db-connection";
import query from "../utils/db-queries";
import {Book} from "../models/types";

export async function findLength(): Promise<number> {
    return (await database.query(query.getLength))[0][0]['COUNT(*)']
}

export async function findAll(): Promise<[Book]> {
    return (await database.query(query.getAll))[0]
}

export async function findByLimitAndCounter(limit: number, counter: number): Promise<[Book]> {
    return (await database.query(query.getWithLimit, [counter, limit]))[0]
}

export async function findById(id: number): Promise<Book> {
    return (await database.query(query.getBook, [id]))[0][0]
}

export async function save(book: Book) {
    try {
        return await database.query(
            query.addBook,
            [book.name, book.year, book.author, book.description, book.preview, book.title]
        )
    } catch (e) {
        console.log(e)
    }
}