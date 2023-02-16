import IAboutMeController from '@/Entities/ControllerEntities/iAboutMeController';
import { Router } from 'express';

export default function createAboutMeRoutes(aboutMeController: IAboutMeController): Router {
  const router = Router();

  router.get('/about_me', aboutMeController.getAboutMe);

  router.post('/about_me', aboutMeController.insertAboutMe);

  router.put('/about_me', aboutMeController.updateAboutMe);

  router.delete('/about_me', aboutMeController.deleteAboutMe);

  return router;
}