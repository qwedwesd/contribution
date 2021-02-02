import { Router } from 'express';
import UserController from '../controllers/userController';

const router = Router();

// /api/user?token=123
// router.get('/', UserController.getUser);

router.get('/', UserController.getAllUser);
router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);
/*
// /api/user/123
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({ id, message: 'Hi' });
});
*/

/*
// /api/user
router.get('/', (req, res) => {
  res.status(200).json({ message: 'ASD' });
});
*/

export default router;
