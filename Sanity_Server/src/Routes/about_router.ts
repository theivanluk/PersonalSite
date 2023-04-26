import { Router } from "express";

export const createAboutRouter = (aboutController: any): Router => {
  const router: Router = Router();

  router.get('/about', aboutController.get);

  return router;
}