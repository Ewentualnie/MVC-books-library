import {Connect} from "./types";

const connection: Connect = {
    host: process.env.host || 'localhost',
    user: process.env.host || 'admin',
    password: process.env.host || 'root',
    database: process.env.host || 'library'
}
export default connection;