import express from "express";
import {getAll, getBook} from '../controllers/mysql-controller'
import {getFront, increaseClickCount} from "../controllers/book-controller";

const booksRouter = express.Router();

booksRouter.get('/', getAll)
booksRouter.post('/book/api/v1', increaseClickCount)
booksRouter.get('/book/:id', getBook)
booksRouter.get('/front', getFront)
export default booksRouter;