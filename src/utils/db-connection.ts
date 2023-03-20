import mysql from "mysql2";

const database = mysql.createPool({
    user: 'admin',
    password: 'root',
    database: 'library'
}).promise();

export default database;