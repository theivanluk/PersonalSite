import { Application } from "express";
import { createApp } from "./App";
import dotenv from 'dotenv';
import SanityDataAccess from "./DataAccess/sanityDataAccess";
import { IDataAccess } from "./Entities/dataAccess";

dotenv.config();

const dataAccess: IDataAccess = new SanityDataAccess()
const app: Application = createApp(dataAccess);
const port = process.env.PORT ?? 8080;

app.listen(port, () => console.log(`Listnening on Port: ${port}`))