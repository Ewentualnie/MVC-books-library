import {Request} from "express";
import {NewBook} from "../models/types";
import {saveAuthor, savePair} from "./mysql-service";

export function createBook(fields: Request["body"], preview: string): NewBook {
    return {
        description: fields.description,
        name: fields.name,
        preview: preview,
        title: fields.name,
        year: fields.year,
        pages: fields.pages
    };
}

export function getAuthors(fields: Request['body']): string[] {
    const authors: string[] = [];
    for (let i: number = 0; i <= 3; i++) {
        const author: string = fields['author' + i]
        if (author) authors.push(author);
    }
    return authors;
}

export async function getAuthorsId(authors: string[]): Promise<number[]> {
    return await Promise.all(authors.map(async (author: string): Promise<number> =>
        await saveAuthor(author)
    ))
}

export function createPairs(bookId: number, authorsId: number[]) {
    authorsId.forEach((authorId: number) => savePair(bookId, authorId))
}

export async function createPairsAndAuthors(fields: Request['body'], bookId: number) {
    const authors: string[] = getAuthors(fields)
    const authorsId: number[] = await getAuthorsId(authors);
    createPairs(bookId, authorsId)
}