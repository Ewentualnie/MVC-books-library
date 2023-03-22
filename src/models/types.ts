export interface FormDataBook extends FormData {
    name: HTMLInputElement,
    year: HTMLInputElement,
    author1: HTMLInputElement,
    author2: HTMLInputElement,
    author3: HTMLInputElement,
    preview: HTMLInputElement,
    description: HTMLInputElement,
}

export type Book = {
    year: number;
    name: string;
    description: string;
    authors: [string]
}