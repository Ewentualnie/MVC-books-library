import express, {Request, Response} from "express";
import {getAll} from '../controllers/mysql-controller'

const booksRouter = express.Router();


booksRouter.get('/', async (req: Request, res: Response) => {
    res.render('index', {
        books: await getAll()
    })
})
export default booksRouter;
