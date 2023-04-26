import { Application } from "express";
import { createApp } from "./App";
import dotenv from 'dotenv';
import { SanityDataAccess } from "./DataAccess/sanityDataAccess";

dotenv.config();

const app: Application = createApp(new SanityDataAccess);
const port = process.env.PORT ?? 8080;

app.listen(port, () => console.log(`Listnening on Port: ${port}`))