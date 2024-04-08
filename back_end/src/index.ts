import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { homeRoute } from './routes';
import { connection } from './sql';

const app = express();

app.use(cors);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(homeRoute);

connection
    .sync({ force: false })
    .then(() => {
        console.log('Database is connected');

        app.listen(3000, () => {
            console.log('Dezz Nuts!, this server is running on port 3000');
        });
    })
    .catch((err) => {
        console.log(err);
    });
