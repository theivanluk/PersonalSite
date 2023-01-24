import { Router } from 'express';

import * as controller from './Controllers/controllertest';

export const router: Router = Router();

router.get('/', controller.test);

