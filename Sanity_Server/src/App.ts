import express, { Application, Router } from "express";
import morgan from "morgan";
import cors from "cors";
import { createAboutRouter } from "./Routes/aboutRouter";
import { AboutController } from "./Controllers/aboutController";
import { SkillsController } from "./Controllers/skillsController";
import { createSkillsRouter } from "./Routes/skillsRouter";
import { PortfolioController } from "./Controllers/portfolioController";
import { createPortfolioRouter } from "./Routes/portfolioRouter";
import { IDataAccess } from "./Entities/dataAccess";
import { IAboutController, IPortfolioController, ISkillsController } from "./Entities/controllers";

export function createApp(dataAccess: IDataAccess): Application {
  const app: Application = express();

  const aboutController:IAboutController = new AboutController(dataAccess);
  const skillsController: ISkillsController = new SkillsController(dataAccess);
  const portfolioController: IPortfolioController = new PortfolioController(dataAccess);

  const aboutRoutes: Router = createAboutRouter(aboutController);
  const skillRoutes: Router = createSkillsRouter(skillsController);
  const portfolioRoutes: Router = createPortfolioRouter(portfolioController);

  app.use(morgan('dev'));
  app.use(cors());
  app.use(express.json());

  app.use(aboutRoutes);
  app.use(skillRoutes);
  app.use(portfolioRoutes);

  return app;
}