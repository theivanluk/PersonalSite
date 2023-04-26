import { Application } from "express";
import { createApp } from "./App";
import dotenv from 'dotenv';

dotenv.config();

const app: Application = createApp();
const port = process.env.PORT ?? 8080;

app.listen(port, () => console.log(`Listnening on Port: ${port}`))