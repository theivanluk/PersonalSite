import express, { Application } from 'express';
import session from 'express-session';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

import IDataAccess from './DataAccess/iDataAccess'
import BlogController from './Controllers/blogController';
import ProjectController from './Controllers/projectController';
import createBlogRoutes from './Routes/blogs';
import createProjectsRoutes from './Routes/projects';
import IBlogController from './Entities/ControllerEntities/iBlogController';
import IProjectController from './Entities/ControllerEntities/iProjectController';
import IAboutMeController from './Entities/ControllerEntities/iAboutMeController';
import AboutMeCntroller from './Controllers/aboutMeController';
import IContactInfoController from './Entities/ControllerEntities/iContactInfoController';
import ContactInfoController from './Controllers/contactInfoController';
import createAboutMeRoutes from './Routes/aboutMe';
import createContactInfoRoutes from './Routes/contactInfo';

dotenv.config();

const corsOptions = {
  origin: '*',
  credentials: true
}

const store = new session.MemoryStore();
const sessionAgeMin = 5;
const secretArray = <string[]> [
  process.env.Session_secret_1,
  process.env.Session_secret_2,
  process.env.Session_secret_3,
  process.env.Session_secret_4
];

const rotateSession = () => secretArray.push(<string> secretArray.shift());

export function createApp(dataAccess: IDataAccess): Application {

  const app: Application = express();

  const blogController: IBlogController = new BlogController(dataAccess);
  const projectController: IProjectController = new ProjectController(dataAccess);
  const aboutMeController: IAboutMeController = new AboutMeCntroller(dataAccess);
  const contactInfoController: IContactInfoController = new ContactInfoController(dataAccess);

  const blogRoutes = createBlogRoutes(blogController);
  const projectRoutes = createProjectsRoutes(projectController);
  const aboutMeRoutes = createAboutMeRoutes(aboutMeController);
  const contactInfoRoutes = createContactInfoRoutes(contactInfoController);

  setInterval(rotateSession, 2500);

  app.use(session({
    secret: secretArray,
    cookie: {
      maxAge: 60000 * sessionAgeMin
    },
    saveUninitialized: false,
    store
  }))

  app.use(morgan('dev'));
  app.use(cors(corsOptions));
  app.use(express.json());

  app.use(blogRoutes);
  app.use(projectRoutes);
  app.use(aboutMeRoutes);
  app.use(contactInfoRoutes);

  return app;
}