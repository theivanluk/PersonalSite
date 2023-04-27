import { Router } from "express";
import { ISkillsController } from "../Entities/controllers";

export const createSkillsRouter = (skillsController: ISkillsController): Router => {
  const router: Router = Router();

  router.get('/skills', skillsController.getSkills);

  router.get('/experience', skillsController.getExperience);

  return router;
}