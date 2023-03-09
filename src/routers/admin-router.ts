import express, {Request, Response} from "express";
import * as fs from "fs";

const adminRouter = express.Router();

adminRouter.get('/', (req: Request, res: Response) => {
    res.render("admin", {
        books: [
            {id: 37, name: "37.jpg", authors: ["author", "author"], year: 2022, clickCount: 5},
            {id: 25, name: "37.jpg", authors: ["author", "author"], year: 2022, clickCount: 5},
            {id: 14, name: "37.jpg", authors: ["author", "author"], year: 2022, clickCount: 5},
            {id: 38, name: "37.jpg", authors: ["author", "author"], year: 2022, clickCount: 5},
            {id: 37, name: "37.jpg", authors: ["author", "author"], year: 2022, clickCount: 5},
            {id: 89, name: "37.jpg", authors: ["author", "author"], year: 2022, clickCount: 5},
            {id: 88, name: "37.jpg", authors: ["author", "author"], year: 2022, clickCount: 5},

        ]
    })
}).post('/api/v1', (req: Request, res: Response) => {
    console.log(req.body)
    res.redirect('..')
}).delete('/api/v1', (req: Request, res: Response) => {

})
adminRouter.get('/front', (req: Request, res: Response) => {
    fs.readFile('./dist/front/admin.js', 'utf-8', (err, data) => res.send(data))
})

export default adminRouter;