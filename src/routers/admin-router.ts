import express, {Request, Response} from "express";

const adminRouter = express.Router();

adminRouter.get('/', (req: Request, res: Response) => {
    res.render("admin", {})
}).post('/api/v1', (req: Request, res: Response) => {

}).delete('/api/v1', (req: Request, res: Response) => {

})

export default adminRouter;