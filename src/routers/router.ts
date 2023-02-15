import express, {Request, Response} from "express";

const router = express.Router();


router.get('/', (req: Request, res: Response) => {
    res.render('index', {
        books: [
            {id: 37, title: "TITLE", author: "LOL AUTHOR"},
            {id: 22, title: "NEW TITLE", author: "new AUTHOR"},
            {id: 23, title: "NEW TITLE", author: "new AUTHOR"},
            {id: 25, title: "NEW TITLE", author: "new AUTHOR"},
            {id: 26, title: "NEW TITLE", author: "new AUTHOR"},
            {id: 27, title: "NEW TITLE", author: "new AUTHOR"},
            {id: 29, title: "NEW TITLE", author: "new AUTHOR"},
            {id: 31, title: "NEW TITLE", author: "new AUTHOR"},
            {id: 31, title: "NEW TITLE", author: "new AUTHOR"},
            {id: 31, title: "NEW TITLE", author: "new AUTHOR"},
            {id: 31, title: "NEW TITLE", author: "new AUTHOR"},
            {id: 31, title: "NEW TITLE", author: "new AUTHOR"},
            {id: 31, title: "NEW TITLE", author: "new AUTHOR"},
            {id: 31, title: "NEW TITLE", author: "new AUTHOR"},
        ]
    })
})
export default router;
