import express from "express";
import {addBook, deleteBook, getAll, getFront} from "../controllers/admin-controller";
import fileUpload from "express-fileupload";
import authCheck from "../controllers/auth-controller";



const adminRouter = express.Router();

adminRouter.get('/',authCheck, getAll)
adminRouter.post('/api/v1',authCheck,fileUpload({createParentPath: true}), addBook)
adminRouter.delete('/api/v1/:id',authCheck, deleteBook)
adminRouter.get('/front', getFront)

export default adminRouter;