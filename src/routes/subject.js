import { Router } from 'express';
import subjectController from '../controllers/subjectController';

const router = Router();

router.get('/', subjectController.getAllSubject);
router.post('/create', subjectController.createSubject);
router.delete('/delete/:id', subjectController.deleteSubject);
router.patch('/updatesubject/:id', subjectController.updateSubject);

export default router;
