"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const dbconnection_1 = require("./src/api/v1/config/dbconnection");
require('dotenv').config();
const port = process.env.PORT || 8000;
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send("Hello From TS");
});
dbconnection_1.AppDataSource.initialize()
    .then(() => console.log("Database connected."))
    .catch(err => console.error("Error connecting database", err));
app.listen(port, () => {
    console.log(`Application listeing on port ${port}`);
});
