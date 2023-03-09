import express from 'express';
import morgan from 'morgan';
import path from 'path'
import booksRouter from "./routers/books-router";
import adminRouter from "./routers/admin-router"
import bodyParser from 'body-parser'

const app = express();
const source = path.resolve(__dirname, '../source')
const port: number = 3000;

app.set('view engine', 'ejs')
app.set('views', source)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(source))
app.use(express.json())
app.use(morgan('common'));
app.use(booksRouter)
app.use("/admin", adminRouter)

app.listen(port, () => console.log("app listen on port " + port))
