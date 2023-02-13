import { Application } from 'express';
import dotenv from 'dotenv';

import { createApp } from './app';
import SQLDataAccess from './DataAccess/sqlDataAccess'

dotenv.config();

const app: Application = createApp(new SQLDataAccess);
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Listening on Port: ${port}`));