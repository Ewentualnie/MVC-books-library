import mysql from "mysql2";
import connection from "../models/connection";

const database = mysql.createPool(connection).promise();

export default database;