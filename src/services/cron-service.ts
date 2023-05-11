import {deletePair, getIDMarkedBooks, hardDeleteBooks} from "./mysql-service";
import {MarkedBook} from "../models/types";
import connection from "../models/connection";
import mysqldump from 'mysqldump';
import fs from "fs";

export function createDBBackup(): void {
    const backupPath: string = process.env.backupPath || './dump/backups/';
    const backupFileName: string = process.env.backupFileName || 'dump.sql';
    const date: string = new Date().toISOString().substring(0, 10) + '_';
    const fullPath: string = backupPath + date + backupFileName;
    if (!fs.existsSync(backupPath)) {
        fs.mkdirSync(backupPath);
    }
    fs.open(fullPath, 'w', (err) => {
        if (!err) {
            mysqldump({connection, dumpToFile: fullPath,})
                .then(() => console.log('The database backup is stored in ' + fullPath));
        }
    })
}

export function deleteMarkedBooks(): void {
    getIDMarkedBooks()
        .then((markedBooks: MarkedBook[]) => Promise.all(markedBooks.map((book: MarkedBook) => deletePair(book.id)))
            .then(async (): Promise<void> => await hardDeleteBooks()));
}