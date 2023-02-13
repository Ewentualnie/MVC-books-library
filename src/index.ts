import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(express.static('source'))
app.use(express.json())
app.use(morgan('common'));

const port: number = 3000;


app.listen(port, () => console.log("app listen on port " + port))
