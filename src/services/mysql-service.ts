import database from "../utils/db-connection";
import query from "../utils/db-queries";
import {NewBook, Book, MarkedBook} from "../models/types";

export async function findLength(): Promise<number> {
    return (await database.query(query.getLength))[0][0]['COUNT(*)'];
}

export async function findByLimitAndCounter(limit: number, counter: number): Promise<Book[]> {
    return (await database.query(query.getWithLimit, [counter, limit]))[0];
}

export async function findById(id: number): Promise<Book> {
    return (await database.query(query.getBookById, [id]))[0][0];
}

export async function saveBook(book: NewBook): Promise<number | undefined> {
    const storedBook = (await database.query(query.getBookByName, [book.name]))[0][0];
    return storedBook ?
        undefined :
        (await database.query(
                query.addBook,
                [book.name, book.year, book.description, book.preview, book.title, book.pages])
        )[0].insertId;
}

export async function deleteById(bookId: number): Promise<number> {
    return (await database.query(query.softDeleteBook, [bookId]))[0].changedRows;
}

export async function saveAuthor(author: string): Promise<number> {
    const storedAuthor = (await database.query(query.getAuthorByName, [author]))[0][0]
    return storedAuthor ?
        storedAuthor.id :
        (await database.query(query.saveAuthor, [author]))[0].insertId;
}

export async function savePair(bookId: number, authorId: number): Promise<void> {
    await database.query(query.savePair, [bookId, authorId]);
}

export async function addViews(id: number): Promise<void> {
    await database.query(query.increaseView, [id]);
}

export async function addClickCount(id: number): Promise<number> {
    return (await database.query(query.increaseClickCount, [id]))[0].changedRows
}

export async function getIDMarkedBooks(): Promise<MarkedBook[]> {
    return (await database.query(query.getMarkedBooks))[0];
}

export async function deletePair(bookId: number): Promise<void> {
    await database.query(query.deletePair, [bookId]);
}

export async function hardDeleteBooks(): Promise<void> {
    await database.query(query.hardDeleteBooks);
}

export async function findByNameWithLimit(name: string): Promise<Book[]> {
    return (await database.query(query.getBooksByPatternName, [name]))[0];
}