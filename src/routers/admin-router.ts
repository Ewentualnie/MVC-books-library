import express from "express";
import {addBook, deleteBook, getAll, getFront} from "../controllers/admin-controller";
import fileUpload from "express-fileupload";


const adminRouter = express.Router();

adminRouter.get('/', getAll)
adminRouter.post('/api/v1',fileUpload({createParentPath: true}), addBook)
adminRouter.delete('/api/v1/:id', deleteBook)
adminRouter.get('/front', getFront)

export default adminRouter;