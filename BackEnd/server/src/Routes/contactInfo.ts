import IContactInfoController from '@/Entities/ControllerEntities/iContactInfoController';
import { Router } from 'express';

export default function createContactInfoRoutes(contactInfoController: IContactInfoController): Router {
  const router = Router();

  router.get('/contact_info', contactInfoController.getContactInfo);

  router.post('/contact_info', contactInfoController.insertContactInfo);

  router.put('/contact_info', contactInfoController.updateContactInfo);

  router.delete('/contact_info', contactInfoController.deleteContactInfo);

  return router;
}