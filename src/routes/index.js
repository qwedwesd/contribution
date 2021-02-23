import { Router } from 'express';
import user from './user';
import subject from './subject';

const router = Router();

router.use('/user', user);
router.use('/subject', subject);

export default router;
