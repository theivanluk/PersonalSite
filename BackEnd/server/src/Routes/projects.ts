import { Router } from 'express';

import IProjectController from './../Entities/ControllerEntities/iProjectController';

export default function createProjectsRoutes(projectController: IProjectController): Router {
  const router = Router();

  router.get('/projects', projectController.getProjects);

  router.get('/projects/:id', projectController.getProjectById);

  router.post('/projects', projectController.insertProject);

  router.put('/projects', projectController.updateProject);

  router.delete('/projects', projectController.deleteProject);

  return router;
}