import express, { Application, NextFunction, Request, Response, Router } from 'express';
import session from 'express-session';
import passport from 'passport';
import { PassportAuth } from './Authentication/passportAuth';
import morgan from 'morgan';
import cors from 'cors';

import { rotateSession, sessionSettings, corsOptions } from './sessionConfig';
import IDataAccess from './DataAccess/iDataAccess'

import BlogController from './Controllers/blogController';
import ProjectController from './Controllers/projectController';
import ContactInfoController from './Controllers/contactInfoController';
import AboutMeController from './Controllers/aboutMeController';

import IBlogController from './Entities/ControllerEntities/iBlogController';
import IProjectController from './Entities/ControllerEntities/iProjectController';
import IAboutMeController from './Entities/ControllerEntities/iAboutMeController';
import IContactInfoController from './Entities/ControllerEntities/iContactInfoController';

import createBlogRoutes from './Routes/blogs';
import createProjectsRoutes from './Routes/projects';
import createAboutMeRoutes from './Routes/aboutMe';
import createContactInfoRoutes from './Routes/contactInfo';
import createAuthRoutes from './Routes/auth';
import IAuthController from './Entities/ControllerEntities/iAuthController';
import AuthController from './Controllers/authController';

export function createApp(dataAccess: IDataAccess): Application {

  const app: Application = express();

  new PassportAuth(dataAccess);

  const authController: IAuthController = new AuthController(dataAccess);
  const blogController: IBlogController = new BlogController(dataAccess);
  const projectController: IProjectController = new ProjectController(dataAccess);
  const aboutMeController: IAboutMeController = new AboutMeController(dataAccess);
  const contactInfoController: IContactInfoController = new ContactInfoController(dataAccess);

  const authRoutes: Router = createAuthRoutes(authController);
  const blogRoutes: Router = createBlogRoutes(blogController);
  const projectRoutes: Router = createProjectsRoutes(projectController);
  const aboutMeRoutes: Router = createAboutMeRoutes(aboutMeController);
  const contactInfoRoutes: Router = createContactInfoRoutes(contactInfoController);


  setInterval(rotateSession, 2.5 * 1000);

  app.use(session(sessionSettings))
  app.use(morgan('dev'));
  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use(passport.initialize());
  app.use(passport.session());

  app.use('/', (req: Request, res: Response, next: NextFunction) => {
    console.log(req.user, "Request User");
    next();
  })

  app.use('/auth', authRoutes);
  app.use(blogRoutes);
  app.use(projectRoutes);
  app.use(aboutMeRoutes);
  app.use(contactInfoRoutes)

  return app;
}