import "reflect-metadata";
import express, {Express, Request, Response } from 'express';
import { AppDataSource } from "./src/api/config/dbconnection";
require('dotenv').config();
const port = process.env.PORT || 8000;

const app : Express = express();


app.get('/', (req: Request, res: Response) => {
    res.send("Hello From TS");
});

AppDataSource.initialize()
            .then(() => console.log("Database connected."))
            .catch(err => console.error("Error connecting database", err));

app.listen(port, () => {
    console.log(`Application listeing on port ${port}`);
})