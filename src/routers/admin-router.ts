import express from "express";
import {addBook, deleteBook, getAll, getFront} from "../controllers/admin-controller";


const adminRouter = express.Router();

adminRouter.get('/', getAll)
adminRouter.post('/api/v1', addBook)
adminRouter.delete('/api/v1', deleteBook)
adminRouter.get('/front', getFront)

export default adminRouter;