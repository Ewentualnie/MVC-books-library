import mysql from "mysql2";

const database = mysql.createPool({
    user: 'admin',
    password: 'root',
    database: 'library'
}).promise();

const queryAll = 'SELECT * FROM books;'

export async function getAll() {
    return (await database.query(queryAll))[0];
}