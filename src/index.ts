import express, {Express} from 'express';
import morgan from 'morgan';
import path from 'path'
import booksRouter from "./routers/books-router";
import adminRouter from "./routers/admin-router"

const app: Express = express();
export const source: string = path.resolve(__dirname, '../source');
const port: number = 3000;

app.set('view engine', 'ejs');
app.set('views', source);

app.use(express.json())
app.use(express.static(source));
app.use(morgan('common'));
app.use(booksRouter);
app.use("/admin", adminRouter);

app.listen(port, () => console.log("app listen on port " + port))