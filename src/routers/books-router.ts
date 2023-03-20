import express from "express";
import {getAll, getBook} from '../controllers/mysql-controller'

const booksRouter = express.Router();

booksRouter.get('/', getAll)
booksRouter.get('/book/:id', getBook)
export default booksRouter;