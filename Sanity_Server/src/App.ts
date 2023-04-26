import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import { createAboutRouter } from "./Routes/about_router";
import { AboutController } from "./Controllers/aboutController";
import { SkillsController } from "./Controllers/skillsController";
import { createSkillsRouter } from "./Routes/skills_router";
import { PortfolioController } from "./Controllers/portfolioController";
import { createPortfolioRouter } from "./Routes/portfolio_router";

export function createApp(dataAccess: any): Application {
  const app: Application = express();

  const aboutController = new AboutController(dataAccess);
  const skillsController = new SkillsController(dataAccess);
  const portfolioController = new PortfolioController(dataAccess);

  const aboutRoutes = createAboutRouter(aboutController);
  const skillRoutes = createSkillsRouter(skillsController);
  const portfolioRoutes = createPortfolioRouter(portfolioController);

  app.use(morgan('dev'));
  app.use(cors());
  app.use(express.json());

  app.use(aboutRoutes);
  app.use(skillRoutes);
  app.use(portfolioRoutes);

  return app;
}