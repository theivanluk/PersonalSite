import { Router } from "express";

export const createSkillsRouter = (skillsController: any): Router => {
  const router: Router = Router();

  router.get('/skills', skillsController.get);

  return router;
}