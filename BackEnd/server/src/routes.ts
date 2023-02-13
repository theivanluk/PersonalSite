import { Router } from 'express';

import { projects, aboutMe, contactInfo, userInfo } from './Controllers';

export const router: Router = Router();

///////////////////////////// PROJECTS /////////////////////////////

router.get('./projects', projects.get);

router.post('/projects', projects.post);

router.put('./projects', projects.put);

router.delete('./projects', projects.del);

///////////////////////////// ABOUT ME /////////////////////////////

router.get('./about_me', aboutMe.get);

router.post('/about_me', aboutMe.post);

router.put('./about_me', aboutMe.put);

router.delete('./about_me', aboutMe.del);

///////////////////////////// CONTACT INFO /////////////////////////////

router.get('./contact_info', contactInfo.get);

router.post('/contact_info', contactInfo.post);

router.put('./contact_info', contactInfo.put);

router.delete('./contact_info', contactInfo.del);

///////////////////////////// USER INFO /////////////////////////////

router.get('./user_info', userInfo.get);

router.post('/user_info', userInfo.post);

router.put('./user_info', userInfo.put);

router.delete('./user_info', userInfo.del);