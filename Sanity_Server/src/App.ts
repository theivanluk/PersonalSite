import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import { createAboutRouter } from "./Routes/about_router";
import { AboutController } from "./Controllers/aboutController";
import { SkillsController } from "./Controllers/skillsController";

export function createApp(dataAccess: any): Application {
  const app: Application = express();

  const aboutController = new AboutController(dataAccess);
  const skillsController = new SkillsController(dataAccess);

  const aboutRoutes = createAboutRouter(aboutController);


  app.use(morgan('dev'));
  app.use(cors());
  app.use(express.json());

  app.use(aboutRoutes);

  return app;
}