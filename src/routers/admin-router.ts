import express from "express";
import {addBook, deleteBook, getAll, getFront} from "../controllers/admin-controller";


const adminRouter = express.Router();

adminRouter.get('/', getAll)
    .post('/api/v1', addBook)
    .delete('/api/v1', deleteBook)
adminRouter.get('/front', getFront)

export default adminRouter;