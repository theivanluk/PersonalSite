import express, { Express } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

import { router } from './routes';

dotenv.config();

const corsOptions = {
  origin: '*',
  credentials: true,
}

const app: Express = express();

app.use(morgan('dev'));
app.use(cors(corsOptions));
app.use(express.json());

app.use('/', router);

app.listen(process.env.PORT, () => console.log(`Listening on Port: ${process.env.PORT}`));