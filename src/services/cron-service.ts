import {deletePair, getIDMarkedBooks, hardDeleteBooks} from "./mysql-service";
import {MarkedBook} from "../models/types";

export async function createDBBackup() {

}

export async function deleteMarkedBooks(): Promise<void> {
    const markedAsDeleted: MarkedBook[] = await getIDMarkedBooks();
    await Promise.all(markedAsDeleted.map((book: MarkedBook) => deletePair(book.id)))
        .then(async (): Promise<void> => await hardDeleteBooks());
}