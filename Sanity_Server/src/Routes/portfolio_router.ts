import { Router } from "express";
import { IPortfolioController } from "../Entities/controllers";

export const createPortfolioRouter = (portfolioController: IPortfolioController): Router => {
  const router: Router = Router();

  router.get('/portfolio', portfolioController.get);

  return router;
}