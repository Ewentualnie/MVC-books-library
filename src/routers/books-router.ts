import express from "express";
import {getAll, getBook} from '../controllers/mysql-controller'
import {getFront} from "../controllers/book-controller";

const booksRouter = express.Router();

booksRouter.get('/', getAll)
booksRouter.get('/book/:id', getBook)
booksRouter.get('/front', getFront)
export default booksRouter;