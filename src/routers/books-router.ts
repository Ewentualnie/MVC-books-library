import express, {Request, Response} from "express";
import {init, getAll, neww} from '../controllers/mysql-controller'

const booksRouter = express.Router();


booksRouter.get('/', (req: Request, res: Response) => {
    res.render('index', {
        books: getAll()
        //     [
        //     {id: 37, preview: "37.jpg", title: "TITLE", author: "LOL AUTHOR"},
        //     {id: 22, preview: "22.jpg", title: "NEW TITLE", author: "new AUTHOR"},
        //     {id: 23, preview: "23.jpg", title: "NEW TITLE", author: "new AUTHOR"},
        //     {id: 25, preview: "25.jpg", title: "NEW TITLE", author: "new AUTHOR"},
        //     {id: 26, preview: "26.jpg", title: "NEW TITLE", author: "new AUTHOR"},
        //     {id: 27, preview: "27.jpg", title: "NEW TITLE", author: "new AUTHOR"},
        //     {id: 29, preview: "29.jpg", title: "NEW TITLE", author: "new AUTHOR"},
        //     {id: 31, preview: "31.jpg", title: "NEW TITLE", author: "new AUTHOR"},
        //     {id: 31, preview: "31.jpg", title: "NEW TITLE", author: "new AUTHOR"},
        //     {id: 31, preview: "31.jpg", title: "NEW TITLE", author: "new AUTHOR"},
        //     {id: 31, preview: "31.jpg", title: "NEW TITLE", author: "new AUTHOR"},
        //     {id: 31, preview: "31.jpg", title: "NEW TITLE", author: "new AUTHOR"},
        //     {id: 31, preview: "31.jpg", title: "NEW TITLE", author: "new AUTHOR"},
        //     {id: 31, preview: "31.jpg", title: "NEW TITLE", author: "new AUTHOR"},
        // ]
    })
})
booksRouter.get('/init', (req: Request, res: Response)=>{
    init()
    res.redirect('..')
})
booksRouter.get('/books', (req: Request, res: Response) => {
    getAll()
    res.redirect("..")
})
export default booksRouter;
