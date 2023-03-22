import database from "../utils/db-connection";
import {queryAll, queryBook, queryWithLimit} from "../utils/db-queries";
import {Book} from "../models/types";

export async function findAll(): Promise<[Book]> {
    return (await database.query(queryAll()))[0]
}

export async function findByLimitAndCounter(limit: number, counter: number): Promise<[Book]> {
    return (await database.query(queryWithLimit(limit, counter)))[0]
}

export async function findById(id: number): Promise<Book> {
    return (await database.query(queryBook(id)))[0][0]
}