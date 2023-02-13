import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

import { router } from './routes';
import IDataAccess from './DataAccess/iDataAccess'
import BlogController from './Controllers/blogController';
import createBlogRoutes from './Routes/blogs';

const corsOptions = {
  origin: '*',
  credentials: true
}


export function createApp(dataAccess: IDataAccess): Application {

  const app: Application = express();

  const blogController = new BlogController(dataAccess);

  app.use(morgan('dev'));
  app.use(cors(corsOptions));
  app.use(express.json());

  app.use(createBlogRoutes(blogController));

  app.use(router);

  return app;
}