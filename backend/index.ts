import express from 'express';
import morgan, {format} from 'morgan';
import cors from 'cors';
import {getAllMovies} from "./db";

const app = express()
app.use(morgan('dev'));
app.use(cors());

app.get('/movies',(req, res) => {
    getAllMovies().then(items => {
        res.status(200).send(items);
    })
});

app.listen(8080,() => {
    console.log("--- App listening on port 8080 ---");
})
