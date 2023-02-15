import express from 'express';
import morgan from 'morgan';
import path from 'path'
import router from "./routers/router";

const app = express();
const source = path.resolve(__dirname, '../source')
const port: number = 3000;

app.set('view engine', 'ejs')
app.set('views', source)

app.use(express.static(source))
app.use(express.json())
app.use(morgan('common'));
app.use(router)

app.listen(port, () => console.log("app listen on port " + port))
