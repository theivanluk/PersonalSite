import AuthController from '@/Controllers/authController';
import IAuthController from './../Entities/ControllerEntities/iAuthController';
import { Router } from 'express';
import passport from 'passport';

export default function createAuthRoutes(authController: IAuthController): Router {
  const router = Router();

  router.post('/login', passport.authenticate('local', {
    successRedirect: '/blog?page=1',
    failureRedirect: '/login'
  }));

  router.post('/register', authController.register);

  router.post('/logout', authController.logOut);

  return router
}