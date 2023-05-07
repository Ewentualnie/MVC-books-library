import database from "../utils/db-connection";
import query from "../utils/db-queries";
import {Book} from "../models/types";

export async function findLength(): Promise<number> {
    return (await database.query(query.getLength))[0][0]['COUNT(*)'];
}

export async function findByLimitAndCounter(limit: number, counter: number): Promise<[Book]> {
    return (await database.query(query.getWithLimit, [counter, limit]))[0];
}

export async function findById(id: number): Promise<Book> {
    return (await database.query(query.getBookById, [id]))[0][0];
}

export async function saveBook(book: Book): Promise<number | undefined> {
    const storedBook = (await database.query(query.getBookByName, [book.name]))[0]
    return storedBook.lenght ?
        undefined :
        await database.query(
            query.addBook,
            [book.name, book.year, book.author, book.description, book.preview, book.title]
        );
}

export async function deleteById(id: number): Promise<number> {
    return (await database.query(query.deleteBook, [id]))[0].changedRows;
}