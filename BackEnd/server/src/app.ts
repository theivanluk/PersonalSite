import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import IDataAccess from './DataAccess/iDataAccess'
import BlogController from './Controllers/blogController';
import ProjectController from './Controllers/projectController';
import createBlogRoutes from './Routes/blogs';
import createProjectsRoutes from './Routes/projects';

const corsOptions = {
  origin: '*',
  credentials: true
}


export function createApp(dataAccess: IDataAccess): Application {

  const app: Application = express();

  const blogController = new BlogController(dataAccess);
  const projectController = new ProjectController(dataAccess);

  app.use(morgan('dev'));
  app.use(cors(corsOptions));
  app.use(express.json());

  app.use(createBlogRoutes(blogController));
  app.use(createProjectsRoutes(projectController));

  return app;
}