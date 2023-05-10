export type Book = {
    id: number;
    year: number;
    name: string;
    description: string;
    preview: string;
    title: string;
    pages: string;
    authors: string;
}

export type NewBook = {
    year: number;
    name: string;
    description: string;
    preview: string;
    title: string;
    pages: string;
}

export type MarkedBook = {
    id: number;
}