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
    const storedBook = (await database.query(query.getBookByName, [book.name]))[0][0]
    return storedBook ?
        undefined :
        (await database.query(
                query.addBook,
                [book.name, book.year, book.description, book.preview, book.title, book.pages])
        )[0].insertId;
}

export async function deleteById(bookId: number): Promise<number> {
    return (await database.query(query.deleteBook, [bookId]))[0].changedRows;
}

export async function saveAuthor(author: string): Promise<number> {
    const storedAuthor = (await database.query(query.getAuthorByName, [author]))[0][0]
    return storedAuthor ?
        storedAuthor.id :
        (await database.query(query.saveAuthor, [author]))[0].insertId
}

export async function savePair(bookId: number, authorId: number): Promise<void> {
    await database.query(query.savePair, [bookId, authorId])
}