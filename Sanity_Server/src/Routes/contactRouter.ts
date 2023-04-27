import { Router } from "express";
import { IContactController } from "../Entities/controllers";

export const createContactRouter = (contactController: IContactController): Router => {
  const router: Router = Router();

  router.post('/send-message', contactController.postMessage);

  return router;
}