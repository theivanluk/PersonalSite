import { Router } from "express";
import { IAboutController } from "../Entities/controllers";

export const createAboutRouter = (aboutController: IAboutController): Router => {
  const router: Router = Router();

  router.get('/about', aboutController.get);

  return router;
}