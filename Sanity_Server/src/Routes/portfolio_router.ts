import { Router } from "express";

export const createPortfolioRouter = (dataAccess: any): Router => {
  const router: Router = Router();

  router.get('/portfolio', dataAccess.get);

  return router;
}