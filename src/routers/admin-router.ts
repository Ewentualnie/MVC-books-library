import express, {Request, Response} from "express";

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

}).delete('/api/v1', (req: Request, res: Response) => {

})

export default adminRouter;